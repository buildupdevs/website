import styled from 'styled-components';

export const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: clamp(1.5rem, 2vw, 3rem);
  margin-bottom: clamp(2rem, 2vw, 3rem);
  ul {
    list-style: none;
    display: flex;
    padding-left: 0;
    li {
      margin-left: 1rem;
      a {
        color: rgb(var(--blue) / 50%);
        font-weight: 600;
        font-size: 1.1rem;
        position: relative;
        text-decoration: none;
        transition: color 0.3s ease-in-out;
        &:before,
        &:hover:before {
          background-color: rgb(var(--blue));
          bottom: -10px;
          left: 0;
          content: '';
          height: 3px;
          position: absolute;
          transition: width 0.3s ease-in-out;
          width: 0%;
        }
        &:hover:before,
        &[aria-current='page']:before {
          width: 100%;
        }
        &:hover,
        &[aria-current='page'] {
          color: #0000ff;
          &:before {
            width: 100%;
          }
        }
      }
    }
  }
  .logo {
    width: 60px;
  }
  .gatsby-image-wrapper {
    border-radius: 50%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    ul li {
      margin-left: 0;
      margin-right: 1rem;
    }
  }
`;
