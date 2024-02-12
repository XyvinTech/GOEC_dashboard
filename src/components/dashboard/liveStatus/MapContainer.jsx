import React from 'react';
import { GoogleMap, Marker,useJsApiLoader } from '@react-google-maps/api';
import operationalIconUrl from '../../../assets/icons/MapIcons/blueGoec.svg';
import nonOperationalIconUrl from '../../../assets/icons/MapIcons/greyGoec.svg';
import busyOperationalIconUrl from '../../../assets/icons/MapIcons/orangeGoec.svg';
import faultOperationalIconUrl from '../../../assets/icons/MapIcons/redGoec.svg';
import { Box } from '@mui/material';



export default function MapContainer({ chargingStations }) {
  console.log(chargingStations);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCGj0hRgN-cr02TaGzHjCY9QilpB5nsMAs'
  })

  const mapStyles = {
    height: "75vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 10.013938, lng: 76.311999
  }


  return (
    <Box sx={{ borderRadius: '8px', overflow: 'hidden' }}>
      { isLoaded &&
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          streetViewControl={false}
          >
          {
            chargingStations.map((item) => {

              const position = {
                lat: parseFloat(item.latitude),
                lng: parseFloat(item.longitude)
              };


              return (
                <Marker key={item.id}
                  position={position}
                  icon={{
                    url: item.charger_status === 'Online' ? operationalIconUrl : item.charger_status === 'Busy' ? busyOperationalIconUrl : item.charger_status === 'Offline' ? faultOperationalIconUrl : nonOperationalIconUrl,
                    scaledSize: new window.google.maps.Size(35, 35), // Scale the icon size
                    anchor: new window.google.maps.Point(10, 10), // Anchor the icon
                  }} />
              )
            })
         }
        </GoogleMap>
}

    </Box>
  )
}
