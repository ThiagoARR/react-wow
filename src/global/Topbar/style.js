import styled from "styled-components";


export const Topbarbox = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 15px;
    backdrop-filter: blur(30px);
`;

export const Searchbox = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
`;

export const IconBox = styled.button`
    border: none;
    background-color: #03111f;
    height: 100%;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    align-items: center;
    transition: 0.2s;
    padding: 0 10px;
    svg {
        color: #ebebeb;
    }
`;

export const Search = styled.input`
    background-color: #03111f;
    border: none;
    height: 100%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    padding: 0px 10px;
    transition: 0.2s;
    &&:focus{
        outline: none;
        color: white;
    }
`;

export const AccountBox = styled.div`
    display: flex;
    justify-content: space-between;
    height: 30px;
    align-items: center;
`;

export const AccountOptBox = styled.div`
    padding: 7px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    transition: .2s;
    margin: 0px 3px;
    &&:hover{
        background: #35414c;
    }
    svg {
        color: #ebebeb;
    }
`;

export const LoginButtonBox = styled.div`
    display: flex;
    margin: 0 3px;
`

export const LoginButton = styled.button`
    width: 120px;
    background-color: #008BEA;
    padding: 10px 5px;
    border-radius: 25px;
    border: none;
    color: white;
    font-weight: bold;
    transition: .2s;
    &&:hover{
        background-color: #0058BA
    }
`;

export const Button = styled.button`
    background-color: none;
    border: none;
`



/*100: "#cdcfd2",
200: "#9aa0a5",
300: "#687079",
400: "#35414c",
500: "#03111f",
600: "#020e19",
700: "#020a13",
800: "#01070c",
900: "#010306"*/