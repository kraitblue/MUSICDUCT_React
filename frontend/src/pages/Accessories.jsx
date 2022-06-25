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

const Accessories = () => {
  return (
    <Container>
      <Pric>ACCESSORIES -</Pric>
      <Wrapper>

      <div class="row">
       <div class="column">

        <ImgContainer>
          <Image src="https://i.pinimg.com/originals/ef/51/28/ef5128d78f004e64dbf4593988d01fcf.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Guitar / Ukulele Wall Hanger</Title>
          <Desc>
          Multifunction Guitar Hook: This wall guitar hanger has applied for U.S. Patent, it not only shows your lovely guitar, it comes with shelf to show other guitar accessories, such as guitar pick, straps, tuner, guitar capos and so on.
Sturdy Guitar Hanger: Made of 100% solid wood and process with torched finish, feature a rustic style and distressed texture, it's will match various decoration styles perfectly.
          </Desc>
          <Price>₹ 655</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#BC9476" />
             
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

        <div class="column">
              <ImgContainer>
          <Image src="https://sc04.alicdn.com/kf/Hc37ea1ae93f24f6491d11ca4815583fcg.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Supercardioid Microphone</Title>
          <Desc>
          Dynamic cardioid microphone collects each word from the special direction, which helps you reduce noise around
19.68 inch(50cm) audio cable gives you more space for your activities, enjoy yourself
XLR-to-1/4 cable supplied, you just need to connect audio cable microphone {"/n"}and plug to various devices
          </Desc>
          <Price>₹ 299</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="Black" />
              
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
 
        <div class="column">
        <ImgContainer>
          <Image src="https://m.media-amazon.com/images/I/41clIbonOoL.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Keyboard Stand/Bench</Title>
          <Desc>
          About this item
Large 12 x 17-inch bench seating area
2.25 inches of high density foam bench padding
Assures the player comfort and eliminates fatigue
Heavy-duty .75 x 1.50-inch steel construction
Approved for players up to 250 lbs.Style	Deluxe Stand & Bench Pack
Brand	World Tour
Maximum Weight Recommendation	250 Pounds
          </Desc>
          <Price>₹ 12,049</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="Black" />
           
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Adjustable</FilterSizeOption>
               
                
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
        </InfoContainer> 
         </div>
         
</div>

<Title></Title>

<div class="row">
       <div class="column">

        <ImgContainer>
          <Image src="https://on-stage.com/productImage/14033_DT8000_OSS_angle.jpg&w=800&h=800" />
        </ImgContainer>
        <InfoContainer>
          <Title>On-Stage Instruments Stool</Title>
          <Desc>
          Guitar performance seat with built-in guitar stand. Holds acoustic, Electric and bass guitars | Collapsible design with quick release pin for compact storage | Durable, padded seat cushion with removable ergonomic backrest | 300lb weight capacity | Some assembly required, Hardware included
          </Desc>
          <Price>₹ 8,891</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="Black" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Adjustable</FilterSizeOption>
                
                
                
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

        <div class="column">
              <ImgContainer>
          <Image src="https://img.joomcdn.net/8c8783b0f61f3c017a43c8f4fa69511190002cc1_1024_1024.jpeg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Drum Bag Backpack Case </Title>
          <Desc>
          EASY CARRY LEATHER HANDLES: Great companion for stage shows, travel and Gig tours; Easy to carry Handles
BIG POCKET ENOUGH SPACE FOR ACCESSORIES: Zippered Big Pocket in front, space for Keys, Cords, Egg Shakers, mobile handsets and much more  Drummer
          </Desc>
          <Price>₹ 2,280</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="	#DC143C" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>7.5H Inches</FilterSizeOption>
                
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
 
        <div class="column">
        <ImgContainer>
          <Image src="https://ae01.alicdn.com/kf/Hd6ad68a0ba9e45dfb18d416a52ef1515r.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Guitar Case With Zips</Title>
          <Desc>
          Guitar bag for 40/41 inch acoustic folk and classic guitars.
Made of high-quality water-resistant material, durable and hard-wearing.
With soft padding inside, protecting guitar from bumps during transport and carrying.   
Dual adjustable shoulder strap with cotton padded, suitable for different persons and comfortable to wear.

          </Desc>
          <Price>₹ 669</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="Black" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>43*107*14cm</FilterSizeOption>
               
                
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

export default Accessories;
