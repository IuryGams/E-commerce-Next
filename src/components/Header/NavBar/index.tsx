import Link from "next/link";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const ContainerSection = styled.section`
    width: 100%;
    background-color: orangered;
`

const ContainerNavBar = styled.nav`
    display: flex;
    -webkit-box-pack: start;
    justify-content: start;
    -webkit-box-align: center;
    align-items: center;
    height: 2rem;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    position: relative;
`

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: start;
    font-weight: bold;
    height: 100%;
    font-size: 18px;

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        height: 100%;
        transition: all 300ms ease-in-out;
        border-right: 1px solid whitesmoke;

        &:last-child{
            border: none;
        }

        a{
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
        }
    }
`

const SubList = styled.ul`
    display: none;
    flex-direction: column;
    gap: 8px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 18dvw;
    height: 80dvh;
    padding: 1em;
    border-radius: 0 0 8px 8px;
    color: black;
    background-color: whitesmoke;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    
    li{
        border: none;
        height: auto;
        justify-content: start;
    }
`

const CustomItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: #d8410a;
    height: 100%;
    padding: 0 10px;

    svg{
        fill: white;
        transition: all 300ms ease-in-out;
    }

    &:hover{    
        svg{
            transform: rotate(-180deg);
        }
    }

    &:hover ul{
        display: flex;
    }
`


export default function NavBar (){
    return(
        <ContainerSection>
            <ContainerNavBar>
                <NavList>
                    <CustomItem>
                        <Link href="#">Departamento</Link>
                        <IoIosArrowDown />
                        <SubList>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                        </SubList>
                    </CustomItem>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="#">Ofertas do dia</Link>
                    </li>
                </NavList>
            </ContainerNavBar>
        </ContainerSection>
    )
} 