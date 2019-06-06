import React from "react";
import { Wrapper } from "../../elements/Wrapper.emotion";
import { PropertiesTitle, PropertiesContainer } from "./Properties.emotion";
import PropertyCard from "./PropertyCard";

const Properties = props => {
  let properties = new Array(5).fill(null);
  console.log(properties);

  return (
    <Wrapper>
      <PropertiesTitle dark>Propiedades disponibles</PropertiesTitle>
      <PropertiesContainer>
        {properties.map((property, index) => (
          <PropertyCard key={index} />
        ))}
      </PropertiesContainer>
    </Wrapper>
  );
};

export default Properties;
