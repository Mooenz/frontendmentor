import styled from 'styled-components';

export const Projects = styled.div`
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 790px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-content: center;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;
