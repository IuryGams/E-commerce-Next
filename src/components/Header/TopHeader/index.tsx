import styled from "styled-components";

const ContainerSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1440px;
    width: 100%;
    background-color: slateblue;
    margin: 0 auto;
`

const Title = styled.h1`
    width: 20%;
`

const StyledForm = styled.form`
    width: 50%;
`

const BoxIcons = styled.div`

`

export default function TopHeader () {
    return(
        <ContainerSection>
            <Title>Store Next</Title>
            <StyledForm>
                <input type="text" />
            </StyledForm>
            <BoxIcons>
                <i></i>
            </BoxIcons>
        </ContainerSection>
    )
} 