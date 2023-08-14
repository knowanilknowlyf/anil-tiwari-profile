import React from 'react';
import TeckStackList from '../utils/techStack';
import Tile from '../components/Tile';
import { FaSchool } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/TileContainer';

const TechStack = () => {
    console.log(TeckStackList)
    return (
        <Wrapper>
            {/* name: "VITE",
    lastUsed: "2023",
    versionWorked: "3",
    projectCount: "2",
    bcg: "#e0fcff",
    color: "#2cb1bc", */}
    <div className="tile-content-g">
    {TeckStackList.map(({name,lastUsed,versionWorked,projectCount,bcg,color})=>{
                
                return  <Tile  
                  key={name}
                  title={name}
                  count={lastUsed}
                  vDetail={versionWorked}
                  color={color}
                  bcg={bcg}
                  icon={projectCount}
                />
})}
    </div>
          


        </Wrapper>
    );
}

export default TechStack;
