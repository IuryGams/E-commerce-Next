import Link from "next/link";
import styled from "styled-components";
import { FaHeart, FaShoppingCart, FaUserCircle  } from "react-icons/fa";

const ContainerSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1440px;
    width: 100%;
    height: 8dvh;
    margin: 0 auto;
`

const Title = styled.h1`
    width: 10%;
`

const StyledForm = styled.form`
    width: 50%;
    height: 50%;
    background-color: white;

    input{
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 20px;
        padding: 0.5em;
    }
`

const ContainerInteragion = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
`

const BoxLogin = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
    font-size: 14px;
  
    a:hover{
        text-decoration: underline;
    }
        
    
`

const BoxIcons = styled.div`
    display: flex;
    gap: 24px;
`

export default function TopHeader () {
    return(
        <ContainerSection>
            <Title>Store Next</Title>
            <StyledForm>
                <input type="text" />
            </StyledForm>
            <ContainerInteragion>
                <BoxLogin>
                    <FaUserCircle size={30} />
                    <span>Faça <strong><Link href="/auth/login">Login</Link></strong> ou <br/>crie seu <strong><Link href="/auth/register">Cadastro</Link></strong></span>
                </BoxLogin>
                <BoxIcons>
                    <Link href="/favoritos">
                        <FaHeart size={24} />
                    </Link>
                    <Link href="/carrinho">
                        <FaShoppingCart size={24} />
                    </Link>
                </BoxIcons>
            </ContainerInteragion>
        </ContainerSection>
    )
} 