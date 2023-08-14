/* eslint-disable react/prop-types */
import  {  useState } from "react";
import Wrapper from "../assets/wrappers/TileContainer";
import Tile from "./Tile";
import { FaSchool } from "react-icons/fa";
import TileDetailsContainer from "./TileDetailsContainer";

const TileContainer = ({ tileDetails }) => {
  console.log(tileDetails);
  let [tab, setTab] = useState(0);
  const showTab = (e) => {
    console.log(e);
    setTab((tab = e));
  };
  return (
    <Wrapper>
      <div className="tile-content">
        {tileDetails.map(({ text, yop, color, bcg }, i) => (
          <Tile
            i={i}
            showTab={showTab}
            key={text}
            title={text}
            count={yop}
            color={color}
            bcg={bcg}
            icon={<FaSchool />}
          />
        ))}
      </div>
      <div className="tile-details">
        <TileDetailsContainer
          title={tileDetails[tab].text}
          count={tileDetails[tab].yop}
          color={tileDetails[tab].color}
          bcg={tileDetails[tab].bcg}
          institute={tileDetails[tab].Institute}
          percentage={tileDetails[tab].percentage}
          organisation={tileDetails[tab].organisation}
        />
      </div>
    </Wrapper>
  );
};

export default TileContainer;
