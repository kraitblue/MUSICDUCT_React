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

const Books = () => {
  return (
    <Container>

      <Pric>Book Store -</Pric>
      <Wrapper>

      <div class="row">
       <div class="column">

        <ImgContainer>
          <Image src="https://i5.walmartimages.com/asr/b984f942-b0b4-4df4-a195-9a808c50979c.0a49c3630d34c3b2e8fa71aa7a841081.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />
        </ImgContainer>
        <InfoContainer>
          <Title>Learn Piano For Beginner</Title>
         
          <Price>₹ 255</Price>

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
          <Image src="https://i5.walmartimages.com/asr/4ac5dbac-59e2-469d-a3ae-ab7d8205864d_1.9ff9e2dbc148faf2ffdbb5022c31101f.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF" />
        </ImgContainer>
        <InfoContainer>
          <Title>Guitar Chords For Beginner</Title>
          
          <Price>₹ 299</Price>
          
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
          <Image src="https://musicalinstrumenthire.com/wp-content/uploads/2019/06/9781408193440_1.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Playing Flute With Techniques</Title>
          
          <Price>₹ 550</Price>
        
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
          <Image src="https://hongkonglasopa279.weebly.com/uploads/1/2/4/8/124834457/106126990.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Best Beginner Drum Book</Title>
         
          <Price>₹ 691</Price>
          
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
          <Image src="https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxa1lEY3V4bk1MLl9TUzQwMF8uanBn.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Harmonica Learning Book</Title>
          
          <Price>₹ 280</Price>
          
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
          <Image src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328745577i/13207729._UY405_SS405_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>All In One Guide (J Mark)</Title>
         
          <Price>₹ 790</Price>
         
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

<Title></Title>
<div class="row">
       <div class="column">

        <ImgContainer>
          <Image src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1624116191i/32202176._UY1000_SS1000_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>All In One Guide (Richard)</Title>
         
          <Price>₹ 891</Price>
          
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
          <Image src="https://m.media-amazon.com/images/I/81jHHYPwwpS._AC_SS450_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Guide for Violin Learners </Title>
          
          <Price>₹ 280</Price>
          
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
          <Image src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1357143735i/13707587._UY456_SS456_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Advance Violin Book</Title>
         
          <Price>₹ 669</Price>
         
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

export default Books;
