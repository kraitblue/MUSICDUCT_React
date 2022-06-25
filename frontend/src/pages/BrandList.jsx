import styled from "styled-components";
import Brands from "../components/Brands";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-family:"times";
  font-weight: bold;
`;



const BrandList = () => {
  return (
    <Container>

      <Title>BRAND LIST</Title>
      <Brands />
    </Container>
  );
};

export default BrandList;
