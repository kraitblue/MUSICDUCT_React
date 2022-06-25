import styled from "styled-components";
import { popularBrands } from "../data";
import Brand from "./Brand";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Brands = () => {
  return (
    <Container>
      {popularBrands.map((item) => (
        <Brand item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Brands;
