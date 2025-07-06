import { Alert, StyleSheet, View } from "react-native";
import OutlineButton from "../../UI/OutlineButton";
import { Colors } from "../../contants/styles";
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions} from "expo-location";

export default function LocationPicker() {
const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
async function verifyPermissions(){
     if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
          const permissionResponse = await requestPermission();
    
          return permissionResponse.granted;
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
          Alert.alert(
            "Insufficient permissions!",
            "You need to grant location permissions to use this app."
          );
          return false;
        }
        return true;
}
  async function getLocationHandler() {
    // Logic to get the user's current location
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync({});
    console.log(location);
  }

  function pickOnMapHandler() {
    // Logic to pick a location on the map
  }
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.action}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlineButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    marginVertical: 8,
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 8,
  },
});
