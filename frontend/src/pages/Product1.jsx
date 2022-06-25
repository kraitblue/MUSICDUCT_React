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

const Product1 = () => {
  return (
    <Container>
      <Pric> WOODWINDS - </Pric>
      <Wrapper>
      
      <div class="row">
       <div class="column">
      
        <ImgContainer>
          <Image src="https://m.media-amazon.com/images/I/619cbEkeHkL._AC_SS450_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Kanha Scale Bamboo Flute</Title>
          <Desc>
            We utilize some of the finest natural medium bamboo to create these flutes that reveal the best of natural sound.{'/n'}
          About this item
Material: Assam Bamboo
Color: Beige and Red {'/n'} Product Dimensions : 76 cmx2.7 cmx2.7 cm
Thread Colour-Blue and Red
Package Contents: 1 Piece Flute With Cover
          </Desc>
          <Price>₹ 3,950.</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#C46200" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>36 inches</FilterSizeOption>
                <FilterSizeOption>39 inches</FilterSizeOption>
                <FilterSizeOption>41 inches</FilterSizeOption>
                
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
          <Image src="https://rocksolidmusic.co.za/wp-content/uploads/2019/10/Front-40.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Sonata Silver Flute with Case</Title>
          <Desc>
          1 Pcs 6 hole f tone stainless steel silver flute 46cm hy90 description: name: f tone stainless steel flute model: hy90 size: about 46 x 2cm thickness: about 1mm material: stainless steel colour: silver tone: f tone usage: for all beginner pronunciation principle: 1 edges effect the blow hole caused by a specific angle side edges.
          </Desc>
          <Price>₹ 9,900</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#C0C0C0" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>36 inches</FilterSizeOption>
                <FilterSizeOption>39 inches</FilterSizeOption>
                <FilterSizeOption>41 inches</FilterSizeOption>
                
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
        

        <div class="column">  <ImgContainer>
          <Image src="https://m.media-amazon.com/images/I/81SbqRRsEQL._SX679_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Kadence Saxophone Tenor Gold</Title>
          <Desc>
         Either way, our saxophones are the answer! They’re great for players of all ages and skills levels.


Body Construction:

Body: Mahogany
Top: Spruce Top
Body Shape: Thinline Cutaway Classical body
Body Type: Cutaway
Bracing: Fan Bracing
Body Binding: Black

Soundhole Rosette: Classical Mosaic Design rosette
Finish: Amber High Gloss
          </Desc>
          <Price>₹ 49,999</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#FFD700" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>soprano</FilterSizeOption>
                <FilterSizeOption>alto</FilterSizeOption>
                <FilterSizeOption>tenor</FilterSizeOption>
                <FilterSizeOption>baritone</FilterSizeOption>
                
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
        </InfoContainer> </div> </div>
        <Title></Title>

        <div class="row">
       <div class="column">
      
        <ImgContainer>
          <Image src="https://www.adams-music.com/images/webitems/9/6/F/96FD5B8B565E4FC0B7560AB69B0BB68C1024.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Jupiter Oboe Instrument </Title>
          <Desc>
          The oboe is a C woodwind, that is, a C major instrument.{"/n"} A lower pitched instrument is the A woodwind, the oboe d'amore, which is pitched in A major. Even lower is the F woodwind, the cor angla {'/n'} (alsoknown as the English horn), pitched in F major. Those are justttwooff the relatives of the oboe.
          </Desc>
          <Price>₹ 10,090</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>36 inches</FilterSizeOption>
                <FilterSizeOption>39 inches</FilterSizeOption>
                <FilterSizeOption>41 inches</FilterSizeOption>
                
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
          <Image src="https://3.imimg.com/data3/LE/BW/MY-2296536/clarinet-musical-instrument-500x500.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Pluto Matt Finish Clarinet </Title>
          <Desc>
          BB 14 KEY CLARINET WITH CASE & 1 REED EXTRA
          About this item
Material: Abonite
color : black
Size (L x W x H): 25 INCHES x 3 INCHES x 25 INCHES
Case Dimensions: Dimensions: Length-14", Width-7.5", Height-3" (in inches) Approximately
Included Items: 1 Clarinet , Hard Case, 1 Extra Reed
          </Desc>
          <Price>₹ 5,190</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#800000" />
             
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>36 inches</FilterSizeOption>
                <FilterSizeOption>39 inches</FilterSizeOption>
                <FilterSizeOption>41 inches</FilterSizeOption>
                
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
        

        <div class="column">  <ImgContainer>
          <Image src="https://image.made-in-china.com/2f0j00VzRUDAhsgfgn/Wholesale-Bassoon-Woodwind-Musical-Instrument-Made-in-China.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Elelctroprime Scale Bassoon</Title>
          <Desc>
          The bassoon is a woodwind instrument in the double reed family, which plays in the tenor and bass ranges. It is composed of six pieces, and is usually made of wood. It is known for its distinctive tone color, wide range, versatility, and virtuosity Bassoons Are Also Called Clowns of the Orchestra.
Not Everyone Can Be a Bassoonist..
          </Desc>
          <Price>₹ 4,170</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>36 inches</FilterSizeOption>
                <FilterSizeOption>39 inches</FilterSizeOption>
                <FilterSizeOption>41 inches</FilterSizeOption>
                
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
        </InfoContainer> </div> </div>
      </Wrapper>
    </Container>
  );
};

export default Product1;
