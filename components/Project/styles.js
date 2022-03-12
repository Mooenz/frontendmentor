import styled from 'styled-components';
import Theme from '../../constants/Theme';

// Colors
const { beige, purple, green, red } = Theme;

export const Article = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 0.625rem;
  max-width: 378px;
  margin: 0 auto;
`;

export const Img = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 10px 10px 0 0;
  transition-duration: 0.5s;

  &:hover {
    opacity: .9;
  }
`;

export const Container = styled.section`
  background-color: ${purple};
  position: relative;
  border-radius: 0 0 10px 10px;
  color: ${beige};
  padding: 24px 24px 40px;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
`;

export const Tag = styled.p`
  letter-spacing: 1.5px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${green};
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 60px;
`;

export const Anchor = styled.a`
  position: absolute;
  bottom: 40px;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition-duration: 0.5s;
  color: ${red};


  &:hover {
    color: ${green};
  }
`;
