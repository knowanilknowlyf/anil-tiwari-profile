import React from 'react';
import TileDetailsContainer from '../components/TileDetailsContainer';
import { FaMailBulk, FaMobile } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <TileDetailsContainer
        title="Anil Kumar Tiwari"
        count={"7 Years"}
        bcg= "rgb(254, 243, 199)"
        color= "rgb(245, 158, 11)"
        institute={"+91 9569253264"}
        percentage={"Front End Developer"}
        organisation={"immediately available"}
        email={"aniltiwari573@gmail.com"}
        cIcon={<FaMobile/>}
        eIcon={<FaMailBulk/>}
      />
    );
}

export default ContactMe;
