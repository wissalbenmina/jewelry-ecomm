import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
` 
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    color: #E1BB53;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    font-size: 40px;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize: 16}}/>
                </SearchContainer>
            </Left> 
            <Center>
                <Logo>SAVOIR</Logo>
            </Center> 
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingBasketOutlined/>
                </Badge>
                </MenuItem>
            </Right> 
        </Wrapper>
        
    </Container>
  )
}

export default Navbar
