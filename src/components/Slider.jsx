import React, {useState} from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";
import {slideImages} from '../data'
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  max-height: 300px;
  ${mobile({height: '250px'})}
  box-shadow: 0 4px 2px -3px gray;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props=>props.direction === 'left' && "10px"};
  right: ${props=>props.direction === 'right' && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translate(${props => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  
  ${mobile({height: '250px',width: "100%", objectFit:"cover"})}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  height: 80%;
`

const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing:1px ;
`
const Button = styled.button`
  padding: 2.5px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`



export default function Slider(){

    const [slideIndex,setSlideIndex] = useState(0)
    const handleClick = (direction)=>{
        if (direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return(
        <Container>
            <Arrow direction={'left'} onClick={()=>handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {slideImages.map(item=>(
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img}/>
                        </ImageContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction={'right'} onClick={()=>handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}
