let latitude= 28.6460, longitude=77.3695;
mapboxgl.accessToken=   "pk.eyJ1IjoiYWRpdHlhYmhhNyIsImEiOiJja25wdWZrMXAwOGI1Mm9wZmdnemF4aWhzIn0.S5KlCW7SHCsMF6evK-SCaQ "  
var map=new mapboxgl.Map({
    container: 'map', style: 'mapbox://styles/mapbox/streets-v11', center: [longitude, latitude], zoom: 16
})
map.addControl(
    new mapboxgl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true })
)
map.addControl(
    new MapboxDirections({ accessToken: mapboxgl.accessToken }), 'top-left'
)