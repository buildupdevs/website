import styled from 'styled-components';

export const IndexStyles = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  .howto {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-column: 1 / -1;
    .title {
      background-color: rgb(var(--blue) / 75%);
      display: grid;
      grid-column: 1 / 2;
      grid-template-columns: 1fr;
      align-items: center;
      h2 {
        color: white;
        font-weight: 600;
        margin: 0;
        text-align: center;
      }
    }
    h2,
    p {
      padding: var(--padding);
    }
    p {
      background-color: rgb(var(--dark) / 5%);
      color: rgb(var(--dark));
      display: block;
      grid-column: 2 / -1;
      margin: 0;
    }
    a {
      color: rgb(var(--blue));
      font-weight: 600;
    }
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
      .title,
      p {
        grid-column: 1 / -1;
      }
    }
  }
`;
