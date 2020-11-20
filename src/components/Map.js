import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker 
                        lat={ev.geometries[0].coordinates[1]} 
                        lng={ev.geometries[0].coordinates[0]} 
                        onClick={() => setLocationInfo({ id: ev.id, title: ev.title, link: ev.sources[0].url })}
                    />
        }   
        return null
    });

    return (
        <div className="Map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB3XMrqoLcN9WR2sUrLwnTOA7HBHW-nuQ4' }}
                defaultCenter={ center }
                defaultZoom={ zoom }    
            >
                
            {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfo info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.0902,
        lng: -98.7129
    },
    zoom: 5
}

export default Map;