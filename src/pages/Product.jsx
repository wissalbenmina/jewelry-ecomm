import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 30px;

`;
const Title = styled.h1`
  
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;



const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #E1BB53;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid #E1BB53;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.pinimg.com/564x/20/e2/34/20e23467416a61d5afbad743d75750fc.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Chain Link Ring</Title>
                <Desc>
                Style #: R025-RGWD | R025-WGWD DESCRIPTION Saxon 18K Double Diamond
                Large Chain Link Ring DETAILS0.28 Diamond Carat WeightRing 
                measures 4.8mm/0.18" WChain Links are NOT Flexible
                </Desc>
                <Price>300 $</Price>
                <FilterContainer>
                    <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS (15,29mm - 15,92mm)</FilterSizeOption>
                        <FilterSizeOption>S (16,24mm - 16,56mm)</FilterSizeOption>
                        <FilterSizeOption>M (16,88mm - 17,20mm)</FilterSizeOption>
                        <FilterSizeOption>L (17,52mm - 17,83mm)</FilterSizeOption>
                        <FilterSizeOption>XL (18,15mm - 18,47mm)</FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
