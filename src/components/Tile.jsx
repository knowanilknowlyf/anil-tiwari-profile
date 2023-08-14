/* eslint-disable react/prop-types */
import Wrapper from '../assets/wrappers/Tile';

const Tile = ({ count, icon, color, title, bcg ,showTab,i,vDetail}) => {
    const passData=()=>{
        showTab(i)
    }
    return (
      <Wrapper color={color} bcg={bcg} onClick={passData} >
        <header>
          <span className="count">{count}</span>
          <span className="icon">{icon}</span>
        </header>
        <footer>
        <h5 className="title">{title}</h5>
        <h5 className="title">{vDetail}</h5>

        </footer>
      </Wrapper>
    );
  };

export default Tile;
