import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Rings</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Type</Option>
                    <Option>Engagement rings</Option>
                    <Option>Wedding bands</Option>
                    <Option>Promise rings</Option>
                    <Option>Birthstone rings</Option>
                    <Option>Fashion rings</Option>
                    <Option>Cocktail rings</Option>
                    <Option>Signet rings</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS (15,29mm - 15,92mm)</Option>
                    <Option>S (16,24mm - 16,56mm)</Option>
                    <Option>M (16,88mm - 17,20mm)</Option>
                    <Option>L (17,52mm - 17,83mm)</Option>
                    <Option>XL (18,15mm - 18,47mm)</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
