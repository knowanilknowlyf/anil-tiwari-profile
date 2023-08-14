import TileContainer from "../components/TileContainer";
import ProjectDetailsList from "../utils/ProjectDetails";

const ProjectDetails = () => {
    console.log(ProjectDetailsList)

  return<>
    <h5 style={{    position: 'absolute',
    top: '66px',
    left: '50%',
    transform: 'translate(-50%,-50%)'}}>{`<`}Click and scroll to see more {`>`}</h5>
   <TileContainer tileDetails={ProjectDetailsList} />
   </>;
};

export default ProjectDetails;
