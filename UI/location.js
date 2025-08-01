import Constants from 'expo-constants';
const GOOGLE_MAPS_KEY =
  Constants?.expoConfig?.extra?.GOOGLE_MAPS_KEY
export default function getMapPreview(lat, lng) {
    console.log("Google Maps API Key:", GOOGLE_MAPS_KEY);
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAPS_KEY}`;
  return imagePreviewUrl;
}

