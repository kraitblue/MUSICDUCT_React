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
  margin: 20px 0px;
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

const Product = () => {
  return (
    <Container>   
      <Pric>STRINGS -</Pric>
      <Wrapper>
      <br />
      <div class="row">
       <div class="column">
       
        <ImgContainer>
          <Image src="https://www.adorama.com/images/Large/ibgrga120qbb.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Ibanez 6 String Electric Guitar</Title>
          <Desc>
          
          A guitar doesn't have to cost a bundle to sound good. The GIO series developed for players who want Ibanez in a more affordable package.
          Ibanez GRGA120QA Features
GRGA Maple neck
Quilted Maple Art Grain top/Poplar body
Treated New Zealand Pine fretboard with White dot inlay
Jumbo frets Infinity R (H) neck pickup
Infinity R (H) bridge pickup
T102 bridge
Black hardware
          </Desc>
          <Price>₹ 20,520</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#0047AB" />
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
          <Image src="https://www.najjarlebanon.com/wp-content/uploads/2021/11/ukelele.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Vault  4-String Tuned Ukulele </Title>
          <Desc>
          Vault UK-2000C Solid Mahogany Top Premium Electro-Acoustic Concert Ukulele

Vault is back with it’s new & upgraded - Solid Top Ukuleles; made from some of the finest components & delivering unmatched sound.
Brand= Vault
Item Dimensions LxWxH	61 x 30.5 x 15.2 Centimeters
String Material Type	Nylon
Item Weight	900 Grams
Number of Strings
          </Desc>
          <Price>₹ 5,129</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#964B00" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>21 inches</FilterSizeOption>
                <FilterSizeOption>23 inches</FilterSizeOption>
                <FilterSizeOption>30 inches</FilterSizeOption>
                <FilterSizeOption>32 inches</FilterSizeOption>
                
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
          <Image src="https://m.media-amazon.com/images/I/81NB1A+vZxL._SX466_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Kadence Acoustic Violin With Bow</Title>
          <Desc>
          About this item
4/4 (Full Size) Acoustic Violin
Solid Spruce top : Solid Maple side and back
Ebony pegs, chin rest and fingerboard, Brazilwood bow with white horsehair.
Lightweight foam fitting soft case, High quality rosin.
1 year warranty against manufacturer's defects. Tail Piece : Wittner Ultra
Pegs : Ebony
Strings : Kadence
Bow: Horse Hair
Model no. : KAD-V-001BL
          </Desc>
          <Price>₹ 8,700</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="	#FF4500" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>36 cm</FilterSizeOption>
                <FilterSizeOption>41 cm</FilterSizeOption>
                <FilterSizeOption>53 cm</FilterSizeOption>
                
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
          <Image src="https://cf.shopee.ph/file/bb49887e94005fc80ff53f08619e241c" />
        </ImgContainer>
        <InfoContainer>
          <Title>Banjo String Concert 4 String</Title>
          <Desc>
          Specification
Binding : Electronics
Brand : Kmise
Color : MI2099
IsAutographed : false
IsMemorabilia : false
Label : Kmise
Product ModleBJ6-24

Top

REMO drum

Back&Sides

 Sapele

Neck

 Okoume

FingerboardRosewood

Machine Head

 Open type

Finish

 Gloss

Color



MOQ

4pcs

Shipment 

within 15 days after receving payment

OEM

available You are hot welcomed to visit our factory.
          </Desc>
          <Price>₹ 4,916</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#964B00" />
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
          <Image src="https://i5.walmartimages.com/asr/4cb16799-9af3-4e14-a9ea-f7dcc4ab7966.36b086bf196885823a0c78eb7927a795.jpeg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Lyre Harp With Tuner</Title>
          <Desc>
          Premium Mahogany:Harp with tuning with highquality wood material, made of solid mahogany to ensure a better sound
16 String Design : Lyreharp 16 string design,The C major scale of harp instruments is withasetof strings and a special wrench to adjust the pitch of string
PureVoice:Lap harp has puresound, when the strings are tapped 
lightlyIdealGift.
          </Desc>
          <Price>₹ 15,757</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#326872" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>1-5 units</FilterSizeOption>
                <FilterSizeOption>6-9 units</FilterSizeOption>
                <FilterSizeOption>20-49 units</FilterSizeOption>
                
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
          <Image src="http://cdn.shopify.com/s/files/1/2966/4646/products/Fiddlerman_Concert_Cello_a2331c03-e432-4da5-b2ca-30fefc2dd2bd.jpg?v=1645628448" />
        </ImgContainer>
        <InfoContainer>
          <Title>Hofner Cello Alfred Stingle</Title>
          <Desc>
          The Cello has an endpin that rests on the floor to support the instrument's weight. The cello is most closely associated with European classical music, and has been described as the closest sounding instrument to the human voice.

FEATURES
Top & Bottom Made of Solid Wood
Fingerboard Made of Ebony
Tailpiece with Fine Tuners
Good Quality Steel Core Strings
Color Finish: Antique Matte & Shine
Cello Comes with Standard Bag & Bow
          </Desc>
          <Price>₹ 24,800</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#C46200" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>26 inches</FilterSizeOption>
                <FilterSizeOption>28 inches</FilterSizeOption>
                <FilterSizeOption>30 inches</FilterSizeOption>
                
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

export default Product;
