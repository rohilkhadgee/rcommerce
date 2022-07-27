import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import { mobile } from '../responsive';
const Container = styled.div`
    height: 60vh;
    background-color:#fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size:70px;
    margin-bottom: 20px;
`
const Description = styled.div`
font-size:24px;
margin-bottom: 20px;
${mobile({textAlign:"center"})}
`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border:1px solid lightgray;
    ${mobile({width:"80%"})}
`
const Input = styled.input`
border:0;
flex:8;
padding-left:20px;
`
const Button = styled.button`
flex:1;
border:0;
background-color: teal;
color:#fff;
cursor: pointer;
`


export const Newsletter = () => {
  return (
    <Container>
        <Title> Newsletter </Title>
            <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit.3</Description>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
      
    </Container>
  )
}
