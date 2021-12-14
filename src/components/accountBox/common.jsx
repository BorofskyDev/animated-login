import styled from "styled-components"


export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;  
  `;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`

export const MutedLink = styled.a`
    font-size: 12px;
    color: #54009f;
    font-weight: 200;
    text-decoration: none;
    
`

export const BoldLink = styled.a`
    font-family: "Mr Dafoe", cursive;
    font-size: 14px;
    color: #00b6c6;
    font-weight: 500;
    text-decoration: none;
    margin: 0 4px;
`

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  
  &::placeholder {
    color: #00b6c6;
  }

     &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(227, 23, 119, 59);
  }
`;


export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-family: "Mr Dafoe", cursive;
    font-size: 15px;
    font-weight: 100;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(227,23,119);
    background: linear-gradient(260deg, 
        rgba(227,23,119,0.5916473317865429) 10%, 
        rgba(84,0,159,1) 50%, 
        rgba(0,182,198,1) 90%
    ); 

    &:hover { 
        filter: brightness(1.33);
    }
`;



