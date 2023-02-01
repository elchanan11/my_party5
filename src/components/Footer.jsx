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
import {mobile, mobileMini, tablet} from "../responsive";
import {Link} from "react-router-dom";
import {deleteProducts} from "../redux/cartRedux";
import {logOut} from "../redux/userRedux";
import {useDispatch, useSelector} from "react-redux";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const Container = styled.div`
  display: flex;
  z-index: 4;
  // background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.9)),
    // url(${backgroundLogo}) center;
  background-color: #F9F3DF;
  ${tablet({flexDirection: 'column'})}
  ${mobile({flexDirection: 'column'})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  ${tablet({alignItems: "center"})}
  ${mobile({alignItems: "center"})}
`;

const Logo = styled.img`
  width: 200px;
  ${tablet({marginBottom: '20px'})}
  ${mobile({marginBottom: '20px'})}
`;

const Desc = styled.p`
  margin: 20px 0px;
  ${tablet({display: 'none'})}
  ${mobile({display: 'none'})}
`;

const SocialContainer = styled.div`
  display: flex;
  
`;

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
    // background-color: #${(props) => props.color};
  background-color: #f3d1aa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  margin-left: 8px;
  cursor: pointer;
  ${mobileMini({width: "32px", height: "32px", marginLeft: "5px", marginRight: "5px"})}
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${tablet({display: 'none'})}
  ${mobile({display: 'none'})}
`;

const Title = styled.h1`
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
  font-size: 17px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 20px;
  ${tablet({alignItems: "center",paddingTop:"5px"})}
  ${mobile({alignItems: "center",paddingTop:"5px"})}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  text-align: right;
  font-size: 20px;
`;
const DeveloperDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;
  text-align: center;
  justify-content: center;
  direction: rtl;
  border-top: 1.5px lightgray solid;
  background-color: #F9F3DF;
`;

const DeveloperDetailsTitle = styled.h2`
  font-size: 20px;
`
const DeveloperDetailsDets = styled.h3`
  font-size: 15px;
`

const DevIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const DevIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  background-color: #F3D1AAFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  margin-left: 8px;
  cursor: pointer;
  ${mobileMini({width: "32px", height: "32px", marginLeft: "5px", marginRight: "5px"})}
`



const Footer = () => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user.currentUser)

    const handleLogOut = () => {

        dispatch(
            deleteProducts()
        )

        dispatch(
            logOut()
        )
    }

    return (
        <>
            <Container>
                <Left>
                    <Link to={'/'} aria-label='to Home page'>
                        <Logo src={logo} alt={"logo"}/>
                    </Link>
                    <Desc>
                        לקהל לקוחותינו היקרים
                        בימים אלו ניתן לבצע הזמנה דרך הטלפון הוואצאפ או המייל, יש אפשרות להגיע לאסוף מהחנות, בנוסף יש אפשרות למשלוח עד לבית! באיזור ביתר עילית, צור הדסה, מבוא ביתר, ירושלים גילה, בית וגן, בית הכרם, גבעת שאול, קרית משה
                    </Desc>
                    <SocialContainer >
                        {user && true ?
                            <SocialIcon color="3B5999">
                                <PersonRemoveIcon onClick={handleLogOut} aria-label={'logout'}>
                                    התנתק
                                </PersonRemoveIcon>
                            </SocialIcon>

                            :
                            <SocialIcon color="3B5999">
                                <Link to={'/login'} aria-label={'log in'}>
                                    <PersonAddIcon >
                                        התחבר
                                    </PersonAddIcon>
                                </Link>
                            </SocialIcon>
                        }
                        <SocialIcon color="3B5999">
                            <a target={"blank"}
                               aria-label={'facebook link'}
                               href={"https://www.facebook.com/pages/category/art/%D7%94%D7%9E%D7%A1%D7%99%D7%91%D7%94-%D7%A9%D7%9C%D7%99-2197659190450858/"}
                               style={{color:"#fff"}}
                            >
                                <Facebook />
                            </a>
                        </SocialIcon>
                        <SocialIcon color="A4BE7B">
                            <a style={{color:"#fff"}} href="tel:+972542595225" aria-label={'our telephone'}>
                                <Phone />
                            </a>
                        </SocialIcon>
                        <SocialIcon
                            color="E60023"
                        >
                            <a style={{color:"#fff"}} href="mailto:Mypartybb@gmail.com" aria-label={'our mail'}>
                                <Mail />
                            </a>
                        </SocialIcon>
                        <SocialIcon color="54B435">
                            <WhatsApp aria-label={'whatsapp link'} onClick={()=>{
                                let postMessageToWatapp = "שלום אני מהאתר"
                                let url = `https://wa.me/+972539323849?text=${postMessageToWatapp}`;

                                window.open(url);}}  />
                        </SocialIcon>
                        <SocialIcon color="E26868">
                            <Instagram aria-label={'instagram link'} onClick={()=>{
                                let url = `https://instagram.com/hamesibasheli?igshid=NTdlMDg3MTY=`;

                                window.open(url);}}  />
                        </SocialIcon>
                        <SocialIcon
                            color="665A48" >
                            <a target={"blank"}
                               aria-label={'location link'}
                               href={"https://www.google.com/maps/place/%D7%94%D7%9E%D7%A1%D7%99%D7%91%D7%94+%D7%A9%D7%9C%D7%99%E2%80%AD/@31.7031666,35.1201339,17z/data=!3m1!4b1!4m5!3m4!1s0x1502db8f10675105:0x8c5f377bd6bf6a3a!8m2!3d31.7031666!4d35.1179452"}
                               style={{color:"#fff"}}
                            >
                                <LocationOnOutlined />
                            </a>
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>

                </Center>
                <Right>
                    <Title>צור קשר</Title>
                    <ContactItem>
                        <Room style={{marginRight:"10px",fontSize:"30px"}}/> הר"ן 20 ,ביתר עילית
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{marginRight:"10px",fontSize:"30px"}}/> 054-259-5225
                    </ContactItem>
                    <ContactItem>
                        <MailOutline style={{marginRight:"10px",fontSize:"30px"}} /> Mypartybb@gmail.com
                    </ContactItem>
                </Right>
            </Container>
            <DeveloperDetails>
                <DeveloperDetailsTitle >
                    האתר נבנה ועוצב ב ❤️ על ידי WebEL
                </DeveloperDetailsTitle>
                <DeveloperDetailsDets>
                    לשיחת ייעוץ ראשונית לחץ:
                </DeveloperDetailsDets>
                <DevIconContainer>
                    <DevIcon>
                        <WhatsApp aria-label={'whatsapp link'} onClick={()=>{
                            let postMessageToWatapp = "שלום אני מאתר המסיבה שלי ורציתי לשוחח בנושא.."
                            let url = `https://wa.me/+972539323849?text=${postMessageToWatapp}`;

                            window.open(url);}}  />
                    </DevIcon>
                    <DevIcon>
                        <a style={{color:"#fff"}} href="tel:+972539323849" aria-label={'our telephone'}>
                            <Phone />
                        </a>
                    </DevIcon>
                </DevIconContainer>

            </DeveloperDetails>
        </>

    );
};

export default Footer;