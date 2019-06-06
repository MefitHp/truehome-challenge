import React from "react";
import {
  PropertyCardContainer,
  PropertyCardTitle,
  PropertyCardSubtitle,
  PropertyCardBanner,
  Overlay,
  PropertyCardBody,
  EditPropertyButton
} from "./Properties.emotion";

const PropertyCard = () => {
  return (
    <PropertyCardContainer>
      <PropertyCardBanner>
        <EditPropertyButton className="fas fa-highlighter" />
        <Overlay>
          <PropertyCardTitle>Colonia Centro</PropertyCardTitle>
          <PropertyCardSubtitle>
            Vendido por Carlos Vazquez
          </PropertyCardSubtitle>
        </Overlay>
      </PropertyCardBanner>
      <PropertyCardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
        voluptatibus dolores soluta fugiat tempore maxime ipsum, perspiciatis
        necessitatibus recusandae?
      </PropertyCardBody>
    </PropertyCardContainer>
  );
};

export default PropertyCard;
