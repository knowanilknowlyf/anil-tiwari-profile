import styled from 'styled-components';

const Wrapper = styled.section`
display:flex;
flex-direction:column;
max-width:100vw;
overflow:hidden;
.tile-content-g{
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  gap:1rem 2rem;
 
}
.tile-content{
  display: flex;
  gap:1rem 2rem;
  overflow-x:auto
}
.tile-details{  
  margin-top: 2rem;
  align-self: center;
  min-width: 75rem;
}
  

  
`;
export default Wrapper;
