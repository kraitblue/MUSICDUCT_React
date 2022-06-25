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

const Product4 = () => {
  return (
    <Container>
      

      <Pric>KEYBOARDS -</Pric>
      <Wrapper>
      <div class="row">
       <div class="column">
        <ImgContainer>
          <Image src="https://www.musikalessons.com/blog/wp-content/uploads/2017/06/grand-piano-.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Yamaha S6X Grand Piano</Title>
          <Desc>
          The MPG100 Digital Mini-Size Baby Grand Piano from Kurzweil is an 88-note, fully-weighted, graded hammer-action keyboard with 500 preset sound selections. Featuring pianos, electric pianos, organs, and orchestral instruments, the MPG100 also offers 200 styles, which can be used to provide fully orchestrated backing arrangements including rhythm, bass, and chord accompaniment.
          </Desc>
          <Price>₹ 89200</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#000000" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>88 semi weighted keys</FilterSizeOption>
                <FilterSizeOption>88 fully weighted keys</FilterSizeOption>
                
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
          <Image src="https://d1aeri3ty3izns.cloudfront.net/media/43/434153/1200/preview.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Electronic Keyboard</Title>
          <Desc>
          This electronic keyboard with 61 keys comes with the best built-in features: 128 rhythms, 128 timbres, tempo control, volume control, 24 demo songs, multiple chord options, various effects controls, 61 keyboard percussion selection and much more.

You can programme the keyboard to assist with your compositions and the intelligent one-key and guide function helps you to learn to play better with minimum fuss.
          </Desc>
          <Price>₹ 13000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#000000" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>40.4 x 94.6 x 13.9cm</FilterSizeOption>
                <FilterSizeOption>94.8 x 35 x 10.9cm</FilterSizeOption>
                
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
          <Image src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/520199/16799495_800.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Hohner Panther Accordion</Title>
          <Desc>
          The Hohner Panther GCF Diatonic Accordion shares many of the quality features of our more expensive diatonics with a lower price tag.
The Panther Accordion features double-strap brackets, 31 treble keys, 12 bass/chord buttons and 2 sets of treble reeds. The Hohner Panther Accordion is 12" high x 7-1/2" deep and weighs 9 pounds. Plays in keys of G, C, F.
          </Desc>
          <Price>₹ 50,744</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#FF0000" />
              
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
        </InfoContainer> </div> </div>
<Title></Title>
        <div class="row">
       <div class="column">
        <ImgContainer>
          <Image src="https://i.pinimg.com/originals/c3/1a/4e/c31a4ec3f7bf559dc17a4868ce4857e7.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title> Harpsichord Instrument</Title>
          <Desc>
          Italian harpsichord 'Giusti 1679'. This instrument is inspired by the original harpsichord built in 1679 by Giovan Battista Giusti in the Tagliavini Collection. Its sound is full, and warmer than many Italian harpsichords making it particularly suitable for a wide solo repertoire as well as a continuo instrument.
          </Desc>
          <Price>₹ 14,60,000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#654321" />
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
          <Image src="http://images.equipboard.com/uploads/item/image/61528/yamaha-celesta-xl.jpg?v=1533491943" />
        </ImgContainer>
        <InfoContainer>
          <Title>Yamaha Celesta Instrument</Title>
          <Desc>
          56 Key Symphonic Series Keyboard Glockenspiel. Equipped with a soft pedal and deer horn hammers. Special metal plates and a unique resonator configuration deliver pure, vibrant tones

throughout the entire range. Piano-standard keyboard height and a narrow keyslip offer more natural, comfortable posture.
          </Desc>
          <Price>₹ 23,70,000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#654321" />
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

export default Product4;
