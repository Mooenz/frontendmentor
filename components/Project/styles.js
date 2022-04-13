import styled from 'styled-components';
import Theme from '../../constants/Theme';

// Colors
const { beige, purple, green } = Theme;

export const Article = styled.article`
  display: flex;
  width: 100%;
  height: 250px;
  align-items: flex-end;
  border-radius: 0.625rem;
  max-width: 378px;
  margin: 0 auto;
  position: relative;
  background: ${({ image }) => `url("${image}")  center/cover no-repeat`};

  &:hover {
    h2 {
      opacity: 1;
    }
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${beige};
    z-index: 1;
    margin: 20px;
    opacity: 0;
  }

  &::after {
    content: '';
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${purple} 100%);
    border-radius: 0.625rem;
    height: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    transition-duration: 0.4s ease-in;
    width: 100%;
  }

  &:hover::after {
    height: 100%;
  }
`;

export const Tag = styled.p`
  color: ${purple};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  background-color: ${green};
  padding: 8px;
  border-radius: 10px;
  width: 80px;
  position: absolute;
  top: 20px;
  right: 20px;
`;
