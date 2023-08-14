import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  header {
    padding: 1.6rem 2rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2.6rem;
  }
  .info {
    h5 {
      margin-bottom: 1rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
    }
  }
  .content {
    padding: 2rem 2.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 2.2rem;
    margin-bottom: 2.5rem;
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    min-width: 10rem;
    max-width:20rem;
    height: 3rem;
    display: grid;
    align-items: center;
  }
  .actions {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
  }
  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
  .edit-btn {
    margin-right: 2rem;
  }
`;

export default Wrapper;
