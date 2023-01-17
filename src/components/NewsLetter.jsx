import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useState} from "react";
import {publicRequest} from "../requestMethods";
import {CircularProgress} from "@mui/material";

const Container = styled.div`
  height: 60vh;
  background-color: #fdfdfd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  cursor: pointer;
  background-color: #9fc0c0;
  color: white;
`;

const Newsletter = () => {
    const [email,setEmail] = useState("")
    const [desc,setDesc] = useState("הצטרפו לניוזלטר ותהנו מרעיונות למתנות, השראות למסיבות ומבצעים")
    const [isSubmitted,setIsSubmitted] = useState(false)
    const [submitDone,setSubmitDone] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(email)
        if (email !== ""){
            setIsSubmitted(true)
            try {
                const res = await publicRequest.post("/newsLetter/", {email:email})
                console.log(res.data)
                setIsSubmitted(false)
                setEmail("")
                if (res.data === "success"){
                    setDesc("!אנחנו מודים לך על הצטרפותך")
                }else {
                    setDesc("!אנא שנית במועד מאוחר יותר")
                }
            }catch (e) {
                setIsSubmitted(false)
                setDesc("אנא שנית במועד מאוחר יותר")
                setEmail("")

                console.log(e)
            }
        }
    }
    return (
        <Container>
            <Title style={{marginBottom:"0"}}>
               רוצים להיות מעודכנים במבצעים החמים
            </Title>
            <Title >
                ?שלנו
            </Title>
            <Desc>{desc}</Desc>
            <form
                onSubmit={handleSubmit}
                style={{border:"0.5px solid lightgray"}}>
                <InputContainer>
                    <Input
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        placeholder="email.email@gmail.com"
                        type={"email"}
                    />
                    <Button type={"submit"} enabled={isSubmitted}>
                        {
                            !isSubmitted ? <Send color="neutral"/> :
                                <CircularProgress color={"inherit"}/>
                        }
                    </Button>
                </InputContainer>
            </form>
        </Container>
    );
};

export default Newsletter;