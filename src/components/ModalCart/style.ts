import styled from "styled-components";

interface ContainerProps {
  isOpen: boolean;
};


export const Container = styled.main<ContainerProps>`

  transition: transform 0.2s, opacity 0.2s;

  opacity: ${props => props.isOpen ? "1" : "0"};
  transform: ${props => props.isOpen ? "translateX(0)" : "translateX(140%)"};

  position: fixed;
  top: 1.5rem;
  right: 100px;
  display: flex;

  .square {
    width: 30px;
    height: 30px;
    background: var(--white);
    border-radius: 5px;
    transform: translateX(calc(-50% - 5px)) translateY(calc(15%)) rotate(45deg)
  }

  @media (max-width: 720px) {
    top: 5rem;
    right: 0;
    left: 0;

    .square {
      position: fixed;
      opacity: 0;
    }
  }
`;

export const Box = styled.div `

  width: 100%;
  height: 100%;  
  background: var(--white);
  border-radius: 5px;
  main {
    padding: 40px;
  }

  color: var(--text);
  
`

export const Item = styled.div`
  font-size: 1.3rem;
  margin-bottom: 20px;
  
  justify-content: space-between;
  display: flex;

  strong {
    margin: 0 5px;
  }
`

export const Actions = styled.div `
  height: 80px;
  width: 100%;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.2);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: bold;
  font-size: 1.8rem;

  .close {
    width: 50px;
    height: 50px;
    background: var(--red);
    border-radius: 15px;
    border:0;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  }

  .check {
    width: 50px;
    height: 50px;
    background: var(--green);
    border-radius: 15px;
    border:0;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  }

`