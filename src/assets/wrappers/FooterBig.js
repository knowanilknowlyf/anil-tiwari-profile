import styled from 'styled-components';

const Wrapper = styled.footer`
  
position:fixed;
bottom:0;
width:100%;
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .footer-container {
      background: var(--background-secondary-color);
     
      margin-bottom: -25rem;
      transition: margin-left 0.3s ease-in-out;
    }
  
    .show-footer {
      margin-bottom: 0;
    }
    .logo{
      position: relative;
      left: -25px;
      top:-15px
    }
    footer {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding: 2rem 0;
      display: flex;
      flex-direction: row;
      justify-content:center;
      position:relative;
    }
    .nav-link {
      display: flex;
      position :relative;
      align-items: center;
      color: var(--text-secondary-color);
      padding:1rem 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
scale :1.1;      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    .pending {
      background: var(--background-color);
    }
  
`;
export default Wrapper;
