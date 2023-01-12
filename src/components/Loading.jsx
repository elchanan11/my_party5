import React from "react";
import styled from "styled-components";
import {CircularProgress, LinearProgress} from "@mui/material";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fffefe;
  z-index: 100;
  position: absolute;
  
`
const LoadContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const Loading = () => {
    return(
        <>
            <Container>
                <LoadContainer>
                    <CircularProgress />
                </LoadContainer>
            </Container>
        </>
    )
}
export default Loading