import styled from "@emotion/styled";

export const FormBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(45, 124, 253, 0.5368522408963585) 0%,
    rgba(34, 193, 195, 1) 100%
  );
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 500px;
  border-radius: 5px;
  padding: 32px;
  margin: 0 1rem;
  box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.5);
`;

export const FormTitle = styled.h2`
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.5rem;
  margin-bottom: 1em;
`;

export const Input = styled.input`
  background: #fff;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  border: transparent;
  outline: 0;
  padding: 22px 18px;
  color: #a3a3a3;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  transition: 0.2s ease;
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const InputLabel = styled.h3`
  margin-left: 8px;
  margin-bottom: 8px;
`;
