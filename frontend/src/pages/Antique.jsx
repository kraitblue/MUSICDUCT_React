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

const Antique = () => {
  return (
    <Container>
      <Pric>ANTIQUE INSTRUMENTS -</Pric>
      <Wrapper>

      <div class="row">
       <div class="column">

        <ImgContainer>
          <Image src="https://m.media-amazon.com/images/I/31ZdcIOpDxL.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Mira Bai's Ektara</Title>
          <Desc>
          The ektara is a drone lute consisting of a gourd resonator covered with skin, through which a bamboo neck is inserted. 
          About this item
Wooden Ektara (Tumbi) Finely Crafted For Each and Every Eternal Music Lover.
Portable and Easy to Use. Used for Gifting Purpose in Various Occasion.
Tested by Professionals Before Shipping.
Ear Soothing Sound.
Folk Music Instrument Proudly Made in India.
          </Desc>
          <Price>₹ 455</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#964B00" />
             
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
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
        </InfoContainer> </div>

        <div class="column">
              <ImgContainer>
          <Image src="https://5.imimg.com/data5/AV/OM/MY-24065078/back-painted-designer-glass-500x500.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Single Gajra Tabla Set</Title>
          <Desc>
          About this item
Made in india,easy for carry, fully tuned, good quality tabla set
Good quality handmade metal drum & sheesham dayan
Head 5to 5. 5 inches height 10 to 11 inches
Disclaimer: product color may differ slightly due to photographic lighting sources or your monitor settings Material	Metal, Sheesham Wood
Finish Type	Metal. Tabla Is Very Nice For You. 
          </Desc>
          <Price>₹ 4,958</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#4E3524" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>4 * 3.5 inches</FilterSizeOption>
                <FilterSizeOption>5 * 3.5 inches</FilterSizeOption>
                
                
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
          <Image src="https://images.selency.com/ed0d7583-286e-4ad3-8596-893ad0060d4f/sitar-indian-music-instrument_original.png?bg_color=F5F5F5&bg=F5F5F5&fit=fill&func=fit&auto=format%2Ccompress&w=579&h=475&meta_format=product_grey_main&fm=jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Saraswati Wooden Veena</Title>
          <Desc>
          Veena is the National Instrument of India. Veena is a traditional South Indian stringed Musical Instrument. Veena is made in Tanjore, Mysore, Rajamundhry and Bobbili. This veena is made up of well seasoned Special Jack Fruit Wood. Veena is associated with Goddess Saraswathi and Saint Muthuswamy Dhikshidhar. Veena is combined by three parts called as Kudam Dandi & Yazhi.
          </Desc>
          <Price>₹ 45,000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#523A28" />
           
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>	11 kg</FilterSizeOption>
               
                
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

<div class="row">
       <div class="column">

        <ImgContainer>
          <Image src="https://cdn10.bigcommerce.com/s-ta610c/products/413/images/2522/Rabab_Kashmiri__07819.1557358204.1280.1280.jpg?c=2" />
        </ImgContainer>
        <InfoContainer>
          <Title>Bhai Mardana's Rubab</Title>
          <Desc>
          Rubab or Rabab is a Musical Instrument from Afghanistan. It is also played in Iran and Pakistan. It is getting popular in Europe and other Northern Countries
It is commonly used in ensembles and to play instrumental solos
This Rabab has 2 Drone Strings, Please keep the Rubab near the fire place or under direct sunlight to tighten the skin
          </Desc>
          <Price>₹ 7,500</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#D0B49F" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>84 cm</FilterSizeOption>
                <FilterSizeOption>86 cm</FilterSizeOption>
                
                
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
          <Image src="https://ii1.pepperfry.com/media/catalog/product/s/o/800x880/sonido-sarangi-full-engraved-sonido-sarangi-full-engraved-wfjgoc.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Wooden Sarangi With Bow</Title>
          <Desc>
          A sarangi is a bowed stringed instrument with a skin-covered resonator. The typical sarangi is made by hand, usually from a single block of wood. The four playing strings on this instrument are made of goat gut, and the seventeen sympathetic strings are made of steel.
           before it made its way into Hindustani classical music during the rise of Khayal Gayaki
          </Desc>
          <Price>₹ 13,000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#A47551" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>30 inches</FilterSizeOption>
                <FilterSizeOption>36 inches</FilterSizeOption>
                
                
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
          <Image src="https://static-01.daraz.com.np/p/f2bfe0bb24424c83bf505fb8c1dbb339.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Shiva's Hand Damru</Title>
          <Desc>
          Damru is known as the instrument of Lord Shiva.
          About this item
Damru made of wood and goat skin with cotton cords.
Damru Size: Height- 5.5 inches x Dia:- 4.25 inches, Net Wt.: 0.25 Kgs.
Shiva drum damru can also be used as home decor object. (Wood colour may vary)
Handmade by artisans of Uttar Pradesh in north India
          </Desc>
          <Price>₹ 599</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#013220" />
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>80 GMS</FilterSizeOption>
               
                
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

export default Antique;
