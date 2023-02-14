import styled from "styled-components";
import Wow from '../../Assets/wow.jpg'

export const LandingPageBox = styled.div`
    width: 100%;
    height: 400px;
    background: linear-gradient( rgba(19, 23, 26, 0.5), rgba(19, 23, 26, 1) ), url(${Wow});
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

    button{
        padding: 5px 10px;
        border-radius: 25px;
        border: none;
        background: yellow;
        margin-top: 10px;
    }
`;