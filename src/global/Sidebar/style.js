import styled from 'styled-components';


export const Sidebarbox = styled.div`
    width: 250px;
    height: 100vh;
    background-color: #15181B;
    padding: 10px 15px;
`;

export const Logobox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid orange;
`;

export const Menubox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding: 10px 0;
`
export const MenuitemBox = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 10px;
    border-radius: 4px;
    transition: .1s;
    &&:hover{
        background: #35414c; 
    }

    svg {
        color: #ebebeb;
    }
`   

export const Menuitem = styled.div`
    color: white;
    font-weight: regular;
    padding: 10px;
    font-size: 12px;
`   

