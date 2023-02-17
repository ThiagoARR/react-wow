import styled from "styled-components";
import Wow from '../../Assets/dragonflight.jpg'

export const LandingPageBox = styled.div`
    width: 100%;
    height: 480px;
    overflow: auto;
    margin-top: -80px;
    background: linear-gradient( rgba(19, 23, 26, 0.1), rgba(19, 23, 26, 1) ), url(${Wow});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    div{
        margin-left: 40px;
        margin-bottom: 40px;
        font-size: 23px;
    }

    div h1{
        color: white
    }

    div h1 b{
        color:#9D7B16;
    }

    div h5 {
        color: white;
        font-weight: normal;
    }
`;

export const Slogan = styled.h1`
    color: white

    b {
        color:#9D7B16;
    }
`;

export const Sublines = styled.h5`
    color: white;
    font-weight: normal;
`;