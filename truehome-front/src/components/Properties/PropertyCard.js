import React from "react";
import {
  PropertyCardContainer,
  PropertyCardTitle,
  PropertyCardSubtitle,
  PropertyCardBanner,
  Overlay,
  PropertyCardBody,
  EditPropertyButton,
  LocationButton,
  PropertyAddress,
  PropertyCardInfo,
  PropertyInfoButton
} from "./Properties.emotion";

const PropertyCard = () => {
  return (
    <PropertyCardContainer>
      <PropertyCardBanner>
        <EditPropertyButton className="fas fa-highlighter" />
        <Overlay>
          <PropertyCardTitle>Colonia Centro</PropertyCardTitle>
          <PropertyCardSubtitle>
            Vendido por Carlos Vazquez.
          </PropertyCardSubtitle>
        </Overlay>
      </PropertyCardBanner>
      <PropertyCardBody>
        <PropertyAddress>
          <LocationButton className="fas fa-map-marker-alt" />
          Alejandro Dumas 71, Polanco, 11550 Ciudad de México, CDMX.
        </PropertyAddress>
        <PropertyCardInfo>
          <PropertyInfoButton
            style={{ borderRight: "1px solid rgba(0,0,0,.1)" }}
          >
            Telefono
          </PropertyInfoButton>
          <PropertyInfoButton>Email</PropertyInfoButton>
        </PropertyCardInfo>
      </PropertyCardBody>
    </PropertyCardContainer>
  );
};

export default PropertyCard;
