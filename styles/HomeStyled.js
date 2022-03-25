import styled from 'styled-components';
import Colors from '../constants/Theme';

// Colors
const { beige, white, purple, red, green } = Colors;

export const Main = styled.main`
  background-color: ${white};
  min-height: 100vh;
  padding: 40px 24px;

  @media screen and (min-width: 1024px) {
    padding: 70px 40px;
  }
`;

export const Content = styled.div`
  background-color: ${purple};
  max-width: 1200px;
  margin: 0 auto 50px;
  padding: 1.5rem;
  border-radius: 0.625rem;
  color: ${beige};
  text-align: center;

  @media screen and (min-width: 1024px) {
    padding: 40px;
    margin-bottom: 70px;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 15px;
  
  @media screen and (min-width: 1024px) {
    font-size: 5rem;
    font-weight: 800;
    text-transform: uppercase;
  }
`;

export const Strong = styled.span`
  color: ${green};
  text-decoration: underline;
  text-underline-offset: 2px;
`;

export const Body = styled.p`
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 3.5rem;
`;

export const Anchor = styled.a`
  cursor: pointer;
  font-weight: 700;
  color: ${green};
  transition-duration: 0.5s;

  &:hover {
    color: ${red};
  }
`;
