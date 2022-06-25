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

const Product2 = () => {
  return (
    <Container>

      <Pric>PERCUSSION -</Pric>
      <Wrapper>
      <div class="row">
       <div class="column">
        <ImgContainer>
          <Image src="https://n1.sdlcdn.com/imgs/b/b/r/Ddrum-JMP522-Journeyman-5-Piece-SDL080303980-1-23a73.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Ddrum D2 Rock Drum Set</Title>
          <Desc>
          
          The D2R takes the D2 concept of a beginner drum set into leaner and meaner territory. For the young rockers or the young rockers at heart, the D2R streamlines the entry level kit into a machine of power and motion. 
          Features:
          Wood: Basswood
          Pieces: 5 Pieces
          Bass Drum: 16inches x 20 inches
          Tom Toms:	8 x 10 inches and  9 x 12inches
          Floor Tom: 14inches x 14 inches
          Snare Drum: 14inches x 5.5 inches
          Cymbal: 16 inches Crash cymbal
          Hi Hats: 14 inches 
          Bass Drum Pedal: Yes One
          </Desc>
          <Price>Rs. 28,000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#000000" />
              
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
          <Image src="https://i5.walmartimages.com/asr/8c99ff26-523f-43f5-a1b4-0190520ace39_1.335a21a3b914108af740ab2f30aab142.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" />
        </ImgContainer>
        <InfoContainer>
          <Title>Djembe Drum Wooden Goat Skin</Title>
          <Desc>
          To furnish the diverse requirements of our clients we are involved in offering an extensive range of Djembe Drums. These Djembe Drums are manufactured by our highly skilled professionals using advanced technology and sheesham wood. These Djembe Drums are available in 8 inch diameter to 18 inch diameter as per the requirements 
          Body Construction:
          Size: 4 inch / 6 inch
          Height: 20cm / 30cm
          Material: Wood + Goat skin
          Diameter of Drumhead: 11cm / 16cm
          </Desc>
          <Price>₹ 5000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
             
              <FilterColor color="#654321" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>16 inches</FilterSizeOption>
                <FilterSizeOption>18 inches</FilterSizeOption>
                <FilterSizeOption>40 inches</FilterSizeOption>
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
          <Image src="http://cdns3.gear4music.com/media/10/100975/1200/preview.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Percussion Plus Tambourine</Title>
          <Desc>
          The Percussion Plus Wooden 8'' Tambourine is fantastic value! A quality tambourine with a clear and crisp sound, the Percussion Plus Budget has a wooden shell, a natural skin head and 4 pairs of jingles around the outside. 
          Body Construction:
          Hand drum
          Frame material: Wood
          Design: Round
          Diameter: 10"(25,40 cm)
          Number of Jingles: 4 Pairs
          </Desc>
          <Price>₹ 20,520</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#ba8c63" />
           
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>8" Double Row</FilterSizeOption>
                <FilterSizeOption>10" Double Row</FilterSizeOption>
                <FilterSizeOption>10" Single Row</FilterSizeOption>
                <FilterSizeOption>12" Single Row</FilterSizeOption>
                
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

        <div class="row">
       <div class="column">
        <ImgContainer>
          <Image src="https://media.musiciansfriend.com/is/image/MMGS7/Concert-Series-Steel-Snare-Drum-14-x-6.5-in./473537000919000-00-1600x1600.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Concert Series Steel Snare Drum</Title>
          <Desc>
          These snare drums are made of steel and have a black finish. They haveaclear distinct sound specifically designed for concert use and are available in 14 x 6-1/2" and with or without a SS-745 concert snare drumstand. 

          </Desc>
          <Price>₹ 47,500</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#000000" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>8 inches</FilterSizeOption>
                <FilterSizeOption>13 inches</FilterSizeOption>
                <FilterSizeOption>14 inches</FilterSizeOption>
                
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
          <Image src="https://n3.sdlcdn.com/imgs/a/i/g/Alpaks-Maracas-Musical-instrument-SDL834806093-1-a098d.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Wooden maracas</Title>
          <Desc>
          Wooden Maracas in red colour with coloured theme, length 22 cm, diameter 7 cm, 1 pair.
          Body Construction:
          Wooden body
          Natural sound
          2pieces
          </Desc>
          <Price>₹ 3000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#c19a6b" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>1</FilterSizeOption>
                <FilterSizeOption>2</FilterSizeOption>
                <FilterSizeOption>More than 2</FilterSizeOption>
                
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
          <Image src="https://5.imimg.com/data5/PW/MI/TJ/SELLER-102264532/wooden-bongo-drum-500x500.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Wooden Bongo Drum</Title>
          <Desc>
          This pair of differently sized bongos are a great first introduction to rhythm and percussion for young children. They’ll enjoy slapping, tapping and knuckle knocking these mini drums to create various percussive noises! 
         
          </Desc>
          <Price>₹ 6,500</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              
              <FilterColor color="#402407" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>4 inch</FilterSizeOption>
                <FilterSizeOption>6 inch</FilterSizeOption>
                <FilterSizeOption>8 inch</FilterSizeOption>
                
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

export default Product2;
