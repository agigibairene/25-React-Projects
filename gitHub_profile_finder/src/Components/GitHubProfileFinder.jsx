import Styled from "styled-components";
import { useEffect, useState } from "react";
import "./style.css";
import User from "./User";

const StyledContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    width: 90%;
    max-width: 1000px;
    flex-direction: column;
`
const InputWrapper = Styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;

    & button{
        background-color: #00f4ec;
        color: #000;
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
    }
`
export default function GitHubProfileFinder(){
    const [userName, setUserName] = useState();
    const [userData, setUserData] = useState();

    const fetchGitHubUserData = async () =>{
        try{
            const response = await fetch(`https://api.github.com/users/${userName}`);
            const data = await response.json();
            setUserData(data);
            console.log(data);
        }
        catch(err){
            console.error("Unable to fetch data", err);
        }
    }

    useEffect(() => {
        fetchGitHubUserData()
    } ,[]);

    
    function handleSubmit(){
        fetchGitHubUserData()
    }

    return (
        <StyledContainer>
            <InputWrapper>
               <input name="search-by-name" type="text" placeholder="Search GitHub Username" value={userName} onChange={(e) =>setUserName(e.target.value)}/>
               <button onClick={handleSubmit}>Search</button>
            </InputWrapper>
            
            {
                userData && <User userInfo={userData}/>
            }
           
        </StyledContainer>
    )
}