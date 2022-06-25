import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";


const Typograp = styled.h3`
  font-weight: bold;
  font-size: 15px;
  font-family:"times";
`;
const Typography = styled.h4`
  font-weight: bold;
  font-size: 18px;
`;

function EventItem(props) {
  const { classes } = props;

  return (
    <div>

      <Grid container className={classes.demo}  spacing={5} >
        <Grid item>
          <Card style={{ maxWidth: 400, height:680, margin: 15 }}>
            <CardActionArea>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",       
                }}
              >
                <CardMedia
                  style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                  component="img"
                  image="https://userphotos2.teacheron.com/1237595-96228.jpg"
                  title="Rohan Pandit"
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                Rohan Pandit
                </Typography>
                <Typograp gutterBottom variant="headline" component="h4">
                  Expertise - Flute
                </Typograp>
                <Typography gutterBottom variant="headline" component="h4">
                About -
                </Typography>
                <p>
                Flute teacher with 8 years of experience.
I will teach you about the basics of playing a flute, how to play any kind of music properly and teach you how to paly every trending songs.
                
</p>
               <Typography gutterBottom variant="headline" component="h3">
                Fee Details -
                </Typography>
                <p>      ₹300–800/hour (US$3.84–10.25/hour) <br />
                </p> 
               

               <Typography gutterBottom variant="headline" component="h3">
                Experience -
                </Typography> <p>
                Online Teaching - 2 Years <br />
                Total Teaching - 5 Years
                </p> 
          
               <Typography gutterBottom variant="headline" component="h3">
                Hometown -
                </Typography><p>
                Midnapore, West Bengal, India
                </p> 
                
               <Typography gutterBottom variant="headline" component="h3">
                Contact Details -
                </Typography><p>
                Email - xyz@gmail.com <br />
                Mobile No. - 99xxxxxxx
                </p>   
              </CardContent>
            </CardActionArea>
            
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ maxWidth: 400, height:680, margin: 15 }}>
            <CardActionArea>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center"
                }}
              >
                <CardMedia
                  style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                  component="img"
                  image="https://userphotos2.teacheron.com/849579-97113.jpeg"
                  title="Nashitha saleem"
                />
              </div>
              <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              Nashitha saleem
                </Typography>
                <Typograp gutterBottom variant="headline" component="h4">
                  Expertise - Veena
                </Typograp>
                <Typography gutterBottom variant="headline" component="h4">
                About
                </Typography>
                <p>      A graduate in veena
from the music college- thiruvananthapuram (swatitirunnal college)
i have been in to the field of art from my childhood by learning music and dance for about 15 years.other than veena i had my training in bharathanatyam,music and guitar.
                </p>

               <p>
               <Typography gutterBottom variant="headline" component="h3">
                Fee Details -
                </Typography>
                ₹400–600/hour (US$5.12–7.69/hour) <br />
               
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Experience -
                </Typography>             
                Total Teaching - 1 Years
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Hometown -
                </Typography>
                Mukkam, Kerala, India
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Contact Details -
                </Typography>
                Email - xyz@gmail.com <br />
                Mobile No. - 99xxxxxxx
                </p>
              </CardContent>
            </CardActionArea>
            
             
          </Card>
        </Grid>

        <Grid item>
          <Card style={{ maxWidth: 400, height:680, margin: 15 }}>
            <CardActionArea>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center"
                }}
              >
                <CardMedia
                  style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                  component="img"
                  image="https://userphotos2.teacheron.com/1192354-19402.jpg"
                  title="Krishnakant Sharma "
                />
              </div>
              <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              Krishnakant Sharma 
                </Typography>
                <Typograp gutterBottom variant="headline" component="h4">
                  Expertise - Guitar
                </Typograp>
                <Typography gutterBottom variant="headline" component="h4">
                About
                </Typography>
                
                <p>      More than 8 year experience as a music teacher. Finalist AWAAZ HINDUSTAN KI, Mumbai (zee Jagran show)
. Worked as judge in the show AB GAAYEGA MATHURA and VOICE OF MATHURA
PROFESSIONAL Qualification.
</p>

               <p>
               <Typography gutterBottom variant="headline" component="h3">
                Fee Details -
                </Typography>
                ₹800–1,500/hour (US$10.25–19.22/hour)
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Experience -
                </Typography>
                Online Teaching - 3 Years <br />
                Total Teaching - 8 Years
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Hometown -
                </Typography>
                Faridabad, Haryana, India
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Contact Details -
                </Typography>
                Email - xyz@gmail.com <br />
                Mobile No. - 99xxxxxxx
                </p>
              </CardContent>
            </CardActionArea>
            
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ maxWidth: 400, height:680,  margin: 15 }}>
            <CardActionArea>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center"
                }}
              >
                <CardMedia
                  style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                  component="img"
                  image="https://userphotos2.teacheron.com/1122747-80821.jpg"
                  title="Kulwinder Singh"
                />
              </div>
              <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              Kulwinder Singh
                </Typography>
                <Typograp gutterBottom variant="headline" component="h4">
                  Expertise - Tabla
                </Typograp>
                <Typography gutterBottom variant="headline" component="h4">
                About
                </Typography>
                <p>   
                Diploma of 5 years from prachin kala kendra chandigarh in punjab gharana.
 professional traning from saptak school of ahemdabad . Types of tabla i will teach (mains) :
Basic, Lite, Classical, Semi-classical.
</p>

               <p>
               <Typography gutterBottom variant="headline" component="h3">
                Fee Details -
                </Typography>
                ₹500–1,000/hour (US$6.41–12.81/hour)
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Experience -
                </Typography>
                Online Teaching - 4 Years <br />
                Total Teaching - 15 Years
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Hometown -
                </Typography>
                Ahmedabad, Gujarat 382424, India
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Contact Details -
                </Typography>
                Email - xyz@gmail.com <br />
                Mobile No. - 99xxxxxxx
                </p>
              </CardContent>
            </CardActionArea>
           
          </Card>
        </Grid>

        <Grid item>
          <Card style={{ maxWidth: 400, height:680, margin: 15 }}>
            <CardActionArea>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center"
                }}
              >
                <CardMedia
                  style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                  component="img"
                  image="https://userphotos2.teacheron.com/978306-25239.jpg"
                  title="Bonny Gosain"
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                Bonny Gosain
                </Typography>
                <Typograp gutterBottom variant="headline" component="h4">
                  Expertise - Drums
                </Typograp>
                <Typography gutterBottom variant="headline" component="h4">
                About -
                </Typography><p>
                Bonny Gosain has been a Trinity College (London)
and a freelance in India & worldwide past 4 years. Apart from teaching, Bonny has performed with various well-known bands including Veda, Rhythm Nation, and many others across the world.
</p>
               <p>
               <Typography gutterBottom variant="headline" component="h3">
                Fee Details -
                </Typography>
                ₹800–1,200/hour (US$10.25–15.37/hour)
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Experience -
                </Typography>
                Online Teaching - 2 Years <br />
                Total Teaching - 4 Years
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Hometown -
                </Typography>
                Juhu, Mumbai, Maharashtra, India
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Contact Details -
                </Typography>
                Email - xyz@gmail.com <br />
                Mobile No. - 99xxxxxxx
                </p> 
               
                
              </CardContent>
            </CardActionArea>
            
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ maxWidth: 400, height:680, margin: 15 }}>
            <CardActionArea>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center"
                }}
              >
                <CardMedia
                  style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                  component="img"
                  image="https://userphotos2.teacheron.com/940741-22040.jpg"
                  title="Pamesh"
                />
              </div>
              <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              Pamesh
                </Typography>
                <Typograp gutterBottom variant="headline" component="h4">
                  Expertise - Mouth Organ
                </Typograp>
                <Typography gutterBottom variant="headline" component="h4">
                About
                </Typography><p>
                I am an engineer by profession and musician by heart'.I can help you to learn mouth organ in simplest and easiest way. I take online class for beginners.
                </p>
               <p>
               <Typography gutterBottom variant="headline" component="h3">
                Fee Details -
                </Typography>
                ₹500/month (US$6.41/month) <br />
               
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Experience -
                </Typography>     
                Online Teaching - 1 Years <br />        
                Total Teaching - 2 Years
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Hometown -
                </Typography>
                Nagpur, Maharashtra, India
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Contact Details -
                </Typography>
                Email - xyz@gmail.com <br />
                Mobile No. - 99xxxxxxx
                </p>
              </CardContent>
            </CardActionArea>
            
             
          </Card>
        </Grid>

        <Grid item>
          <Card style={{ maxWidth: 400, height:680, margin: 15 }}>
            <CardActionArea>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center"
                }}
              >
                <CardMedia
                  style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                  component="img"
                  image="https://userphotos2.teacheron.com/828802-83839.png"
                  title="Meenakshi S "
                />
              </div>
              <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              Meenakshi S 
                </Typography>
                <Typograp gutterBottom variant="headline" component="h4">
                  Expertise - Piano
                </Typograp>
                <Typography gutterBottom variant="headline" component="h4">
                About
                </Typography>
                <p>
                We have an excellent mix of students from age 5 to 50 plus who are school goers, working professionals, businessmen, college students and homemakers.
                Regular concert and online competitions are held.
                </p>
               <p>
               <Typography gutterBottom variant="headline" component="h3">
                Fee Details -
                </Typography>
                ₹1,500–6,000/month (US$19.22–76.87/month)
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Experience -
                </Typography>
                Online Teaching - 3 Years <br />
                Total Teaching - 7 Years
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Hometown -
                </Typography>
                Adyar, Chennai, Tamil Nadu, India
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Contact Details -
                </Typography>
                Email - xyz@gmail.com <br />
                Mobile No. - 99xxxxxxx
                </p>
              </CardContent>
            </CardActionArea>
            
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ maxWidth: 400, height:680,  margin: 15 }}>
            <CardActionArea>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center"
                }}
              >
                <CardMedia
                  style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                  component="img"
                  image="https://userphotos2.teacheron.com/253490-08961.jpg"
                  title="Aguru Sarkar"
                />
              </div>
              <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              Aguru Sarkar
                </Typography>
                <Typograp gutterBottom variant="headline" component="h4">
                  Expertise - Sarangi
                </Typograp>
                <Typography gutterBottom variant="headline" component="h4">
                About
                </Typography>
                <p>
                If one loves music and want to be a performer he/ she will get all kinds of cooperation from me . I want to make a performer . So, you really interested to be a performer you can contact .
                </p>

               <p>
               <Typography gutterBottom variant="headline" component="h3">
                Fee Details -
                </Typography>
                ₹3,500–4,000/month (US$44.84–51.25/month)
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Experience -
                </Typography>
                Online Teaching - 0 Years <br />
                Total Teaching - 47 Years
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Hometown -
                </Typography>
                Gol Park, Dhakuria, Kolkata, West Bengal, India
                </p> 
                <p>
               <Typography gutterBottom variant="headline" component="h3">
                Contact Details -
                </Typography>
                Email - xyz@gmail.com <br />
                Mobile No. - 99xxxxxxx
                </p>
              </CardContent>
            </CardActionArea>
           
          </Card>
        </Grid>

      </Grid>

    </div>
  );
}

export default withStyles(withStyles)(EventItem);
