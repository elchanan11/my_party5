import styled from "styled-components";
import {mobile} from "../responsive";
import bg2 from '../bglogo2.jpg'

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 250px;
  display: flex;
  position: relative;
  overflow: hidden;
  max-height: 300px;
  
  ${mobile({height: '250px'})}
  //box-shadow: 0 4px 2px -3px gold;
`

const ImageContainer = styled.img`
   //
   // background: repeating-linear-gradient(rgb(255, 245, 210,0.1), rgba(248, 248, 223,0.7)),
   // url(${bg2}) center;
  
  height: 400px;
  object-fit: cover;
  flex: 1;
  top: 30px;
  ${mobile({height: '251px',width: "100%",objectFit:"cover"})}
`


export default function BgImage(){
  return(
        <>
          <Container>
            <ImageContainer src={bg2} alt={"תמונת מסך בית"}>

            </ImageContainer>
          </Container>

      </>
      )

}