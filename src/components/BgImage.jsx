import styled from "styled-components";
import {mobile} from "../responsive";
import bg from '../bgImg.jpg'

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

const ImageContainer = styled.div`
   background: linear-gradient(rgba(238,232,170,0.6), rgba(255,255,255,0.7)),
   url(${bg}) bottom;
  height: 100%;
  min-height: 255px;
  flex: 1;
  ${mobile({height: '251px',width: "100%", objectFit:"cover"})}
`


export default function BgImage(){
  return(
        <>
          <Container>
            <ImageContainer>

            </ImageContainer>
          </Container>

      </>
      )

}