import styled from "styled-components";
import { darken, desaturate } from 'polished'

export const Container = styled.article`
  width: 278px;
  height: 397px;
  background: var(--white);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: relative;
  margin-bottom: 2.5rem;
  margin-right: 2.5rem;

  align-items: center;
  display: flex;

  flex-direction: column;
  color: var(--text);
  font-size: 24px;
  font-weight: bold;

  &:last-child {
    margin-right: 0;
  }

  img {
    height: 60%;
  }

  button {
    position: absolute;
    bottom: 10px;
    margin: 0 auto;
    left: 0;
    right: 0;
    border: 0;

    width: 90%;
    height: 67px;
    border-radius: 15px;
    background: var(--green);
    
    color: var(--white);
    font-size: 1.87rem;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 0.2s;

    box-shadow: 0 0 5px rgba(0,0,0, 0.25)
  }

  button:hover {
    background: ${darken(0.1, '#52B922')}
  }

  button:disabled {
    background: ${desaturate(1, '#52B922')};
    cursor: not-allowed
  }

  svg {
    margin-left: 6px;
    transform: translateY(3px)
  }

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;