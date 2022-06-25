import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;

  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 70%;
  height: 48vh;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 0px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 150;
  font-size: 26px;
  font-family:"times";
  margin-top:20px;
`;

const Desc = styled.p`
  margin: 20px 2px;
  color: black;
  font-size: 15px;
  font-family:"times";
`;

const Pric = styled.span`
  font-weight: 100;
  font-size: 36px;
  margin: 15px;
  font-family:"times";
`;


const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Miya = () => {
  return (
    <Container>
      
      <Pric>Brands -</Pric>
      <Wrapper>
      <div class="row">
       <div class="column">
        <ImgContainer>
          <Image src="https://jgwindows.com/media/catalog/product/cache/4f90cae31f10b9531e4d9f25f0805028/m/j/mj101.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Miyazawa MJ101E Flute, Silver Lip-plate</Title>
          <Desc>
          This Miyazawa flute is ideal for any upgrading flautist wanting a serious instrument to take them through the grades or perform to a high standard.

This new MJ model brings the feel and tone of a Miyazawa to a new more affordable market position and makes it approachable for upgraders.

All Miyazawa flutes are hand finished resulting in exceptional precision.
          </Desc>
          <Price>₹ 62,300</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#c0c0c0" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Free Size</FilterSizeOption>
                
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer> 
        </InfoContainer></div>
        <div class="column">
        <ImgContainer>
          <Image src="https://jgwindows.com/media/catalog/product/cache/4f90cae31f10b9531e4d9f25f0805028/p/b/pb402_c.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Miyazawa Flute, Solid Silver</Title>
          <Desc>
          A handmade flute with open hole and C foot, sterling silver lip plate and riser. It has an Innovative pinless left-hand mechanism for more precise and stable adjustments, resulting in a more even, effortless feel and significantly reducing wear. Featuring stronger and more reliable cold-forged keys, flat-bottomed key cups which provide a superior, consistent surface for pads.

This model has the Brögger System™ in the left hand of the flute. This mechanism increases the stability of the keywork on the flute: using non-rotating shafts and back connectors for all the main line keys, the most common left-hand binding keywork and misadjustments are eliminated.
          </Desc>
          <Price>₹ 90,200</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#c0c0c0" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Free Size</FilterSizeOption>                
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer> </div>

        </div>

      
 
        
      </Wrapper>
    </Container>
  );
};

export default Miya;
