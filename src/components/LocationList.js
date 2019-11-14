import React, { useContext} from 'react';
import { LocationContext } from './LocationContext';

const LocationList = () => {
    const [locations] = useContext(LocationContext);
    const locationList = Array.from(locations);
    return (
        <div>
            {locationList.map((item) => {
                return <div key={item._id}>{item.name}</div>
            })}
        </div>
    );
}

export default LocationList;