import styled from "styled-components";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-family:"times";
  font-weight: bold;
    font-size: 30px;
`;

const ProductList = () => {
  return (
    <Container>
      <Title>CATEGORIES LIST</Title>
      <Products />
    </Container>
  );
};

export default ProductList;
