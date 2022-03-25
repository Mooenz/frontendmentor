import styled from 'styled-components';
import Theme from '../../constants/Theme';

// Colors
const { beige, purple, green, red } = Theme;

export const Article = styled.article`
  display: flex;
  width: 100%;
  height: 250px;
  flex-direction: column;
  border-radius: 0.625rem;
  max-width: 378px;
  margin: 0 auto;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
  transition-duration: 0.5s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Container = styled.section`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) -20%, ${purple} 95%);
  position: absolute;
  border-radius: 10px;
  color: ${beige};
  padding: 24px;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Tag = styled.p`
  color: ${purple};
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: end;

  span {
    background-color: ${green};
    padding: 8px;
    border-radius: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Anchor = styled.a`
  text-decoration: underline;
  text-underline-offset: 2px;
  transition-duration: 0.5s;
  color: ${green};
  width: 70px;

  &:hover {
    color: ${red};
  }
`;
