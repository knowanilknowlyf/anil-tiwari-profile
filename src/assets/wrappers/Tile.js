import styled from 'styled-components';

const Wrapper = styled.article`
min-height: 18.9rem;
min-width: 36.4rem;
  padding: 2rem;
  cursor:pointer;
  background: var(--background-secondary-color);
  border-bottom: 5px solid ${(props) => props.color};
  border-radius: var(--border-radius);
  &:hover{
    scale :1.05;      
    color: ${(props) => props.color};;
    transition: var(--transition);  }
  header,footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color};
    line-height: 2;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: left;
    margin-top: 0.5rem;
    font-size: 2rem;
  }
  .icon {
    width: 70px;
    color:${(props) => props.color};
    height: 60px;
    background: ${(props) => props.bcg};
    border-radius: var(--border-radius);
    display: flex;
    text-align:center;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 4rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
