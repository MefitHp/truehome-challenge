import styled from "@emotion/styled";

export const PropertiesTitle = styled.h1`
  font-size: 42px;
  border-bottom: 2px solid gainsboro;
  color: ${props => (props.dark ? props.theme.colors.dark : "#FFF")};
`;

export const PropertiesContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  @media all and(max-width: 768) {
    justify-content: space-between;
  }
`;

export const PropertyCardContainer = styled.div`
  box-sizing: border-box;
  margin: 5px;
  flex: 0 1 calc(33% - 1em);
  border-radius: 5px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.15);
  transition: 0.2s ease;
  &:hover {
    box-shadow: 1px 6px 6px 2px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 769px) {
    flex: 0 1 calc(50% - 1em);
  }
  @media screen and (max-width: 550px) {
    flex: 1;
  }
`;
export const PropertyCardTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: ${props => (props.dark ? props.theme.colors.dark : "#FFF")};
`;

export const PropertyCardSubtitle = styled.p`
  font-size: 0.95em;
  font-weight: 400;
  color: ${props => (props.dark ? props.theme.colors.dark : "#FFF")};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const PropertyCardBanner = styled.header`
  width: 100%;
  height: 150px;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background-image: url('${props =>
    props.src
      ? props.src
      : "https://www.setaswall.com/wp-content/uploads/2017/06/House-Wallpapers-37-1920-x-1200.jpg"}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.55);
  padding: 12px;
`;

export const PropertyCardBody = styled.div`
  padding: 8px 12px;
`;

export const EditPropertyButton = styled.i`
  color: #fff;
  padding: 10px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  position: absolute;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  top: 10px;
  right: 10px;
  transition: 0.3s ease;
  box-shadow: -1px 4px 2px rgba(255, 255, 255, 0.25);
  &:hover {
    box-shadow: -1px 4px 2px rgba(255, 255, 255, 0.55);
  }
`;

export const LocationButton = styled.i`
  padding: 5px;
  color: brown;
`;

export const PropertyAddress = styled.p`
  color: rgba(0, 0, 0, 0.65);
  padding-bottom: 10px;
  font-weight: 550;
  text-align: justify;
  text-justify: inter-word;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const PropertyCardInfo = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
`;

export const PropertyInfoButton = styled.p`
  text-align: center;
  flex: 1;
  padding: 8px 16px;
`;
