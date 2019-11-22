import React, { useContext} from 'react';
import { MaterialContext } from './MaterialContext';

const MaterialList = () => {
    const [locations] = useContext(MaterialContext);
    const locationList = Array.from(locations);
    return (
        <div>
            {locationList.map((item) => {
                return <div key={item._id}>{item.name}</div>
            })}
        </div>
    );
}

export default MaterialList;