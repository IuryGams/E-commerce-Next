import styled from "styled-components";
import TopHeader from "./TopHeader";

const ContainerHeader = styled.header`
    display: flex;
    flex-direction: column;
    width: 100dvw;
    height: 8dvh;
    background-color: slategray;
`

export default function Header () {
    return(
        <ContainerHeader>
            <TopHeader />
        </ContainerHeader>
    )
}