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

const Getzen = () => {
  return (
    <Container>
      
      <Pric>Brands -</Pric>
      <Wrapper>
      <div class="row">
       <div class="column">
        <ImgContainer>
          <Image src="https://www.taylormademusic.net/wp-content/uploads/2017/08/JP051-Trumpet-INSTRUMET-SHOT.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Lacquer Rose Gitzen Trumpet</Title>
          <Desc>
          The JP051 Bb Trumpet has become one of the main stays of trumpet tuition in the UK education system. It has set a high standard for durability and good performance at an accessible price, comparing very favourably against many of the more expensive student instruments on the market.

The JP051 represents unparalleled quality and durability given its highly affordable cost, making it a favourite within music services and educational establishments the world over.
          </Desc>
          <Price>₹ 42,900</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#ffd700" />
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
          <Image src="http://www.1800usaband.com/uploads/images/TP-N-Silver.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Gitzen Silver Plate Trumpet</Title>
          <Desc>
          The JP152 C Trumpet enables players to purchase their own affordable harmony trumpet without spending thousands. Historically, C trumpets have been expensive and reserved for those in professional level orchestral playing however with the arrival of the JP152 C trumpet, this is now due to change. Happily competing against many more expensive models, the high quality finish and construction of the JP152 surprises many who try it. 
          </Desc>
          <Price>₹ 82,000</Price>
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

export default Getzen;
