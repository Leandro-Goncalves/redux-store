import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  justify-content: flex-end;

  button {
    background: transparent;
    border: 0;
    position: relative;
  }
`;

export const Badge = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  font-weight: bold;
`