import styled from "styled-components";
import {mobile} from "../responsive";
import backgroundLogo from '../img_23.png'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.9)),
  url(${backgroundLogo}) center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width: '60%'})}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  //Added
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  text-align: right;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  text-align: center;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  background-color: #354eca;
  color: white;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>צור חשבון</Title>
                <Form>
                    <Input placeholder="שם" />
                    <Input placeholder="שם משפחה" />
                    <Input placeholder="שם משתמש" />
                    <Input placeholder="אימייל" />
                    <Input
                        placeholder="סיסמא"
                        type={"password"}
                    />
                    <Input
                        placeholder="אימות סיסמא"
                        type={"password"}
                    />
                    <Agreement>
                        על ידי יצירת חשבון, אני מסכים לעיבוד האישי שלי
                        נתונים בהתאם ל <b>מדיניות הפרטיות</b>
                    </Agreement>
                    <Button>צור חשבון</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;


