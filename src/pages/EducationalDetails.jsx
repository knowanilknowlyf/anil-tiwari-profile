import React from 'react';
import TileContainer from '../components/TileContainer';
import EducationalDetailsList from '../utils/EducationalDetailsList';

const EducationalDetails = () => {
    return (
       <TileContainer tileDetails={EducationalDetailsList}/>
    );
}

export default EducationalDetails;
