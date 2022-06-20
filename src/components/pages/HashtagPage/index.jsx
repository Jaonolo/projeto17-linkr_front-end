import {useEffect, useState, useContext} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../../../contexts/UserContext";
import Header from "../../Header";
import Post from "../../Post/Post";
import { ThreeCircles } from "react-loader-spinner";

export default function HashtagPage({ myPost }){
    const [postsList, setPostsList] = useState([]);
    const [trending, setTrending] = useState([]);
    const [animacao, setAnimacao] = useState(true);
    const [userState, setUserState] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const hashtag = location.pathname.split("/")[2];

    useEffect( () => {
        const config = {headers: { authorization: `Bearer ${userState}`}}
        const URL = process.env.REACT_APP_API_URL + location.pathname
        const promise = axios.get(URL, config)
        promise.then( (response) => {   setPostsList(response.data)
                                        setAnimacao(false)})
        promise.catch( (err) => console.log('Error Get PostsList TIMELINE: ', err))

        const promisseTrending = axios.get(process.env.REACT_APP_API_URL + "/trending-hashtags");
        promisseTrending.then(response => setTrending(response.data));
    }, []);

    function IsListEmpyt(){
        if(postsList.length === 0){
            return(<h1>There are no posts yet</h1>)
        }
        return(<Post postsList={postsList}/>)
    } 
    
    function goToHashtagPage(tag) {
        navigate("/hashtag/" + tag.split("#")[1]);
        window.location.reload();
    }

    function CreateSideBar(){
        return(
            <SideBar>
                <h3>trending</h3>
                <SideBarLine/>
                {trending.map( (hashtag) => {
                    return <p key={hashtag.tag} onClick={()=>goToHashtagPage(hashtag.tag)}>{hashtag.tag}</p>
                })}
            </SideBar>
        )
    }

    function Loading(){
        return(
                <LoadingHTML>
                    <ThreeCircles   color="red"
                                    outerCircleColor= "#B6A7B5"
                                    middleCircleColor="#504350"
                                    innerCircleColor="#BCA79C"/>
                </LoadingHTML>)}
    
    if(animacao){return(<MainContent> <Loading/> </MainContent>)}
    
    return( <TimelineHTML>
                <Header/>
                <MainContent> 
                    <CenterHTML>
                        <Title> {"# " + hashtag} </Title>
                        <IsListEmpyt/>
                    </CenterHTML>
                    <CreateSideBar/>
                </MainContent>
            </TimelineHTML>)}

const LoadingHTML = styled.div`
    display: flex;
    width: 100vw;
    height: 100vw;
    justify-content: center;
    align-items: center;
`

const TimelineHTML = styled.div`
    height: 100%;
    overflow: scroll;
`;

const Title = styled.h1`
    display: flex;
    width: 100%;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 3%;
    color: #fff;
    `;

const MainContent = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    height: 100%;
    margin-left: 3%;
`;

const CenterHTML = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    margin-right: 25px;
    /* background-color: blue; */
`;

const SideBar = styled.aside`
    display: flex;
    position: sticky;
    margin-top: 126px;
    width: 25%;
    height: fit-content;
    margin-left: 1%;
    background: #171717;
    border-radius: 16px;
    flex-direction: column;
    font-family: var(--default-font);
    color: #FFFFFF;
    padding-bottom: 30px;
    h3 {
        margin-left: 5%;
    }
    
    p {
        margin-left: 5%;
    }
`;

const SideBarLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--line-grey);
    margin-bottom: 5%;
`;