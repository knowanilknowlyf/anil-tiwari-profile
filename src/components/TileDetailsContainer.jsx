/* eslint-disable react/prop-types */
import Wrapper from "../assets/wrappers/TileDetailsContainer";
import TileDetails from "./TileDetails";
import { FaBriefcase, FaCalendar, FaLocationArrow } from "react-icons/fa";

const TileDetailsContainer = ({
  title,
  count,
  color,
  bcg,
  percentage,
  institute,
  organisation,email,eIcon,icon,cIcon
}) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{title.charAt(0)}</div>
        <div className="info">
          <h5>{percentage}</h5>
          <p>{title}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <TileDetails icon={cIcon?cIcon:<FaLocationArrow />} text={institute} />
          <TileDetails icon={icon?icon:<FaCalendar />} text={count} />
          <TileDetails icon={eIcon?eIcon:<FaBriefcase />} text={email?email:"full-time"} />
          <div className={`status declined`}>
            {organisation ? organisation : "First-Class"}
          </div>
          {/* <footer className="actions">
              <Link className="btn edit-btn" to={`../edit-job/${_id.toString()}`}> Edit</Link>
              <Form method="post" action={`../delete-job/${_id}`}>
                <button type="submit" className="btn btn-delete">
                  Delete
                </button>
              </Form>
            </footer> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default TileDetailsContainer;
