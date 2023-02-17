import styled from 'styled-components';


export const Sidebarbox = styled.div`
    width: 270px;
    height: 100vh;
    background-color: #15181B;
    padding: 10px;
    overflow: auto;
    position: relative;
    margin-left: -270px;
    transition: 0.1s ease-in-out;
    &.active{
        margin-left: 0;
    }

    &&:hover{
        scrollbar: auto;
    }
`;

export const Div = styled.div`

`