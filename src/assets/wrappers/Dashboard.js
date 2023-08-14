import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    position:relative;
    width: 90vw;
    margin: 0 auto;
    padding: 9rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns:  1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
export default Wrapper;
