import React from "react";
import {
  FormBackground,
  FormStyled,
  FormTitle,
  Input,
  InputLabel
} from "./Form.emotion";
const Form = props => {
  let { id, step } = props.match.params;
  return (
    <FormBackground>
      <FormStyled>
        <FormTitle>Edita tu propiedad..</FormTitle>
        <InputLabel>Calle y número: </InputLabel>

        <p>ID: {id}</p>
        <p>Step: {step}</p>
        <Input />
        <br />
        <input type="text" />
      </FormStyled>
    </FormBackground>
  );
};

export default Form;
