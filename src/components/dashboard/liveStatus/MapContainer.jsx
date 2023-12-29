import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import operationalIconUrl from '../../../assets/icons/MapIcons/blueGoec.svg';
import nonOperationalIconUrl from '../../../assets/icons/MapIcons/greyGoec.svg';



export default function MapContainer({ chargingStations }) {

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  

  return (
    <>
    
    <LoadScript
       googleMapsApiKey='AIzaSyCGj0hRgN-cr02TaGzHjCY9QilpB5nsMAs'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
          {
            chargingStations.map((item) => {

              const position = {
                lat: parseFloat(item.Latitude),
                lng: parseFloat(item.Longitude)
              };


              return (
                <Marker key={item.id}
                position={position}
                icon={{
                  url: item.status === 'active' ? operationalIconUrl : nonOperationalIconUrl,
                  scaledSize: new window.google.maps.Size(30, 30), // Scale the icon size
                  anchor: new window.google.maps.Point(15, 15), // Anchor the icon
                }}
              />
              )
            })
         }
        </GoogleMap>
     </LoadScript>
    
    </>
  )
}
