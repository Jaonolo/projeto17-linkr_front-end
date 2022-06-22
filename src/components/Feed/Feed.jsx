import { useEffect } from "react";
import styled from "styled-components";

import Post from "../Post/Post";

export default function Feed({postsList, currentPage, setCurrentPage, loading}) {

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log('Sentinela appears!', currentPage + 1);
                setCurrentPage((currentValue) => currentValue + 1);
            }
        });
        intersectionObserver.observe(document.querySelector('#sentinela'));
        return () => intersectionObserver.disconnect();
    }, []);
    
    if(loading && postsList?.length === 0) {
        return <></>;
    }
    
    if(postsList?.length === 0){
        return(<h1>There are no posts yet</h1>);
    }

    return (
            <FeedList>
                {postsList?.map( post => {
                    return <Post postINFO={post} key={post.id}/>;
                } )}
            </FeedList>
    );
}

const FeedList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
`;