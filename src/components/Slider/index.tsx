import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
];

const WrapperSlider = styled.section`
    display: flex;
    width: 100vw;
    height: clamp(400px, 50dvh, 50dvh);
    background-color: rgba(0,0,0,0.1);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const ContainerSlider = styled.figure`
    display: flex;
    max-width: 1440px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: antiquewhite;
    position: relative;
    /* overflow: hidden; */

    img{
        display: flex;
        align-items: center;
        justify-content: center;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

const ArrowLeft = styled(FaAngleLeft)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -5%;
    width: 60px;
    height: 60px;
    padding: 0.5em;
    border-radius: 50%;
    cursor: pointer;
    fill: rgba(0, 0, 0, 0.2);
    transition: all 300ms ease-in-out;

    &:hover{
        fill: black;
    }
`

const ArrowRight = styled(ArrowLeft)`
    transform: rotate(-180deg) translateY(50%);
    right: -5%;
    left: auto;
`

export default function Slider () {
    
    const [image, setImage] = useState(0);

    const prevSlider = () => {
        const isFirstSlide = image === 0;
        const newIndex = isFirstSlide ? Slides.length - 1 : image - 1;
        setImage(newIndex);
    }

    const nextSlider = () => {
        const isLastSlide = image === Slides.length - 1;
        const newIndex = isLastSlide ? 0 : image + 1;
        setImage(newIndex);
    }

    return(
        <WrapperSlider>
            <ContainerSlider>
                <ArrowLeft onClick={prevSlider} />
                <Link href="/">
                    <Image fill={true} src={Slides[image].url} alt="Imagem de produtos da loja" />
                </Link>
                <ArrowRight onClick={nextSlider} />
            </ContainerSlider>
        </WrapperSlider>
    )
}