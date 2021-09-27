import styled from 'styled-components';

export const HeroStyles = styled.section`
  background-color: rgb(var(--blue) / 5%);
  grid-column: 1 / -1;
  padding: var(--padding);
  p {
    color: rgb(var(--blue) / 75%);
    font-weight: 400;
    font-size: clamp(1.2rem, 3vw, 1.5rem);
  }
`;
