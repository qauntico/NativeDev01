const GOOGlE_MAPS_API_KEY = "AIzaSyAdjiJKX8oFANs6idNeeI8TjZ94CAxqqTg";
export default function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGlE_MAPS_API_KEY}`;
  return imagePreviewUrl;
}

