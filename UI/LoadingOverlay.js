import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../contants/styles";

function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#eab309" />
    </View>
  );
}

export default LoadingOverlay;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
