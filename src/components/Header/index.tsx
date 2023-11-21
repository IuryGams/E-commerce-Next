import styled from "styled-components";
import TopHeader from "@/components/Header/TopHeader"
import NavBar from "./NavBar";

const ContainerHeader = styled.header`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    max-width: 100vw;
    background-color:#0086CF;
    color: white;

    a{
        color: whitesmoke;
    }
`

export default function Header () {
    return(
        <ContainerHeader>
            <TopHeader />
            <NavBar />
 
        </ContainerHeader>
    )
}