import styled from "styled-components";
import Wow from '../../Assets/wow.jpg'

export const LandingPageBox = styled.div`
    width: 100%;
    height: 500px;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.93) ), url(${Wow});
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    div{
        margin-left: 40px;
        margin-bottom: 40px;
        font-size: 26px;
    }

    div h1{
        color: white
    }

    div h1 b{
        color:#9D7B16;
    }
`;