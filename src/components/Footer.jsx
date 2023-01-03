import logo from '../logo.png'
import backgroundLogo from '../img_23.png'
import {
    Facebook,
    Instagram, LocationOnOutlined, Mail,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter, WhatsApp,
} from "@mui/icons-material";
import styled from "styled-components";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  // background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.9)),
    // url(${backgroundLogo}) center;
  background-color: #D6E4E5;
  ${mobile({flexDirection: 'column'})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({alignItems: "center"})}
`;

const Logo = styled.img`
  width: 200px;
  ${mobile({marginBottom: '20px'})}
`;

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({display: 'none'})}
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: 'none'})}

`;

const Title = styled.h3`
  margin-bottom: 30px;
  text-align: right;
  font-size: 25px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  text-align: right;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  text-align: right;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 20px;
  ${mobile({alignItems: "center"})}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  text-align: right;
  font-size: 20px;
`;



const Footer = () => {
    return (
        <Container>
            <Left>
                <Link to={'/'}>
                    <Logo src={logo}/>
                </Link>
                <Desc>
                    לקהל לקוחותינו היקרים
                    בימים אלו ניתן לבצע הזמנה דרך הטלפון הוואצאפ או המייל, יש אפשרות להגיע לאסוף מהחנות, בנוסף יש אפשרות למשלוח עד לבית! באיזור ביתר עילית, צור הדסה, מבוא ביתר, ירושלים גילה, בית וגן, בית הכרם, גבעת שאול, קרית משה
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <a target={"blank"}
                           href={"https://www.facebook.com/pages/category/art/%D7%94%D7%9E%D7%A1%D7%99%D7%91%D7%94-%D7%A9%D7%9C%D7%99-2197659190450858/"}
                           style={{color:"#fff"}}
                        >
                            <Facebook />
                        </a>
                    </SocialIcon>
                    <SocialIcon color="A4BE7B">
                        <a style={{color:"#fff"}} href="tel:+972542595225">
                            <Phone />
                        </a>
                    </SocialIcon>
                    <SocialIcon
                        color="E60023"
                    >
                    <a style={{color:"#fff"}} href="mailto:Mypartybb@gmail.com">
                        <Mail />
                    </a>
                    </SocialIcon>
                    <SocialIcon color="54B435">
                        <WhatsApp onClick={()=>{
                            let postMessageToWatapp = "שלום אני מהאתר"
                            let url = `https://wa.me/+972539323849?text=${postMessageToWatapp}`;

                            window.open(url);}}  />
                    </SocialIcon>
                    <SocialIcon color="E26868">
                        <Instagram onClick={()=>{
                            let url = `https://instagram.com/hamesibasheli?igshid=NTdlMDg3MTY=`;

                            window.open(url);}}  />
                    </SocialIcon>
                    <SocialIcon
                        color="665A48" >
                        <a target={"blank"}
                           href={"https://www.google.com/maps/place/%D7%94%D7%9E%D7%A1%D7%99%D7%91%D7%94+%D7%A9%D7%9C%D7%99%E2%80%AD/@31.7031666,35.1201339,17z/data=!3m1!4b1!4m5!3m4!1s0x1502db8f10675105:0x8c5f377bd6bf6a3a!8m2!3d31.7031666!4d35.1179452"}
                           style={{color:"#fff"}}
                        >
                            <LocationOnOutlined />
                        </a>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>קישורים</Title>
                <List>

                    <ListItem>
                        <Link to={'/'}>
                            בית
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'/register'}>
                            הירשם
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'/login'}>
                            התחבר
                        </Link>
                    </ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>צור קשר</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px",fontSize:"30px"}}/> הרן 20 ,ביתר עילית
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px",fontSize:"30px"}}/> 054-259-5225
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px",fontSize:"30px"}} /> Mypartybb@gmail.com
                </ContactItem>
            </Right>
        </Container>
    );
};

export default Footer;