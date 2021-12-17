import styled from 'styled-components';
import link from '../assets/images/link.svg';

export const DiscordStyles = styled.div`
  .intro,
  .coc,
  a.discord,
  a.discord:visited {
    padding: var(--padding);
  }
  .intro {
    background-color: rgb(var(--blue) / 5%);
    h2 {
      color: rgb(var(--blue));
      margin-top: 0;
    }
    p {
      color: rgb(var(--dark));
    }
  }
  .coc {
    h2 {
      margin-top: 0;
    }
    ul {
      padding-left: 1rem;
    }
    p,
    li {
      color: rgb(var(--dark));
    }
    a {
      color: #0000ff;
    }
    a[target='_blank'] {
      display: inline-block;
      margin-top: 1rem;
      position: relative;
      &:after {
        background: url(${link}) no-repeat;
        background-size: contain;
        content: '';
        height: 18px;
        margin-left: 10px;
        position: absolute;
        bottom: 6px;
        width: 18px;
      }
    }
  }
  a.discord,
  a.discord:visited {
    background-color: rgba(88, 101, 242, 1);
    box-shadow: 0 0 0 rgba(88, 101, 242, 0);
    color: white;
    cursor: pointer;
    display: block;
    font-weight: 600;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.5s ease-in-out;
    &:hover {
      background-color: rgba(88, 101, 242, 0.75);
    }
  }
  a span {
    display: block;
    font-weight: 400;
    font-size: 0.75rem;
    margin-top: 2rem;
  }
`;
