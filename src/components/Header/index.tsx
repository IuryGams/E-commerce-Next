import styled from "styled-components";
import TopHeader from "@/components/Header/TopHeader"
import NavBar from "./NavBar";

const ContainerHeader = styled.header`
    display: flex;
    flex-direction: column;
    width: 100dvw;
    height: 12dvh;
    background-color: slategray;
`

export default function Header () {
    return(
        <ContainerHeader>
            <TopHeader />
            <NavBar />
        </ContainerHeader>
    )
}