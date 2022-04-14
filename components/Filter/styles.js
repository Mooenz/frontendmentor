import styled from 'styled-components';
import Colors from '../../constants/Theme';

// Colors
const { beige, red, purple } = Colors;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 0 1.5rem;
  margin: 50px 0;

  @media screen and (min-width: 1024px) {
    padding: 0 2.5rem;
    margin: 70px 0;
    gap: 25px;
  }
`;

export const Button = styled.button`
  padding: 10px 25px;
  border-radius: 0.625rem;
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;
  border: none;
  transition-duration: 0.5s;
  color: ${({ tapActive, selectTap }) => 
    tapActive === selectTap ? purple : beige};

  background-color: ${({ tapActive, selectTap }) =>
    tapActive === selectTap ? red : purple};

  &:hover {
    color: ${purple};
    background-color: ${red};
  }

  &:active {
    transform: translateY(0.5rem);
  }
`;
