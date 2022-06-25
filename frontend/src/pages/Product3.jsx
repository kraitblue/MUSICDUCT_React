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

const Product3 = () => {
  return (
    <Container>
      
      <Pric>BRASS -</Pric>
      <Wrapper>
      <div class="row">
       <div class="column">
        <ImgContainer>
          <Image src="https://www.saxandwoodwind.com.au/DesktopModules/Revindex.Dnn.RevindexStorefront/Portals/99/Gallery/77fdf62a-8754-422d-8fdc-5e5069aab138.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Schiller Elite Rotary Trumpet</Title>
          <Desc>
          Authoritative projection with vociferous low end sub tones the Schiller Frankfurt Elite C Bass Trumpet C Offers an Equisite Quality instrument at an Affordable Price.
          The trumpet is a brass instrument commonly used in classical and jazz ensembles. The trumpet group ranges from the piccolo trumpet with the highest register in the brass family, to the bass trumpet, which is pitched one octave below the standard B♭ or C Trumpet.
          </Desc>
          <Price>₹ 4,750</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#f5f5dc" />
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
          <Image src="https://d2i3kda2ok83zv.cloudfront.net/images/product_images/1604889437.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Jupiter Brass Bbb Tuba</Title>
          <Desc>
          This model was designed to enhance the learning experience being remarkably free-blowing by not overly taxing players to produce a clean notes.

Key design and positioning make for an ergonomic and comfortable play.

Features such as high F# key, tone boosters and stainless steel springs add to the instruments playability and overall positive experience.

As a whole package the JAS500 provides tremendous.
          </Desc>
          <Price>₹ 10,000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#f5f5dc" />
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

        <div class="column">  <ImgContainer>
          <Image src="https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/139689/15656410_800.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title> Baptiste F-Trigger Trombone</Title>
          <Desc>
          The Jean Baptiste ST490F F-Trigger Trombone is the perfect trombone for the advancing player. The trombone features a gold brass bell and yellow brass body with nickel silver bracings for added strength and durability. It also features an improved finish on the hand slide for increased reliability, as well as superior sound and feel. The trombone is a 15th-century development of the trumpet.        </Desc>
          
          <Price>₹ 22,000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#f5f5dc" />
              
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

        <div class="row">
       <div class="column">
        <ImgContainer>
          <Image src="https://santamonicamusic.com/wp-content/uploads/2021/09/French-Horn-Instrument-Rental-Santa-Monica-Music-Center.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Yamaha French Horn</Title>
          <Desc>
          High qualitybut never at outrageous prices, Jean Baptiste offers this French horn, the latest in a long tradition of quality student horns. Developedwith the serious studentin mind, this french horn will allow your student to progresswith its beautiful to </Desc>
          <Price>₹ 46,968</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#f5f5dc" />
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
          <Image src="https://cdn.shopify.com/s/files/1/0080/0656/5943/products/stomvi-s1-bb-cornet-cornet-stomvi_1600x.jpg?v=1590197355" />
        </ImgContainer>
        <InfoContainer>
          <Title>King Legend Bb Cornet </Title>
          <Desc>
          The trumpet and the Bb cornet are the same pitch and feature the same fingerings but the cornet is easier for younger students to play. Cornets have tighter tubing (remember the four 180-degree turns), which makes it smaller and easier to hold. 
          </Desc>
          <Price>₹ 22,500</Price>
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

        <div class="column">  <ImgContainer>
          <Image src="https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/78/58/9727c86f-fc0c-44af-afe0-a6cbf18349be.JPG" />
        </ImgContainer>
        <InfoContainer>
          <Title>Chromatic Mouth Organ </Title>
          <Desc>
          The harmonica, also known as a French harp or mouth organ, is a free reed brass instrument used worldwide in many musical genres, notably in blues, American folk music, classical music, jazz, country, and rock. The many types of harmonica include diatonic, chromatic, tremolo.
          </Desc>
          <Price>₹ 4800</Price>
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
        </InfoContainer> </div> </div>
 
        
      </Wrapper>

    </Container>
  );
};

export default Product3;
