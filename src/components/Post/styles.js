import styled from 'styled-components';
import { Card } from '../../styles/Card'

export const PostHTML = styled(Card)`
    background: #171717;
    color: #FFFFFF;
`
export const PostAside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SubPostAside = styled.div`
    display: flex;
    width: 80px;
    flex-direction: column;
    align-items: center;
    margin-top: 30%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;

    svg {
        font-size: 17px;
        color: #FFFFFF;
        margin-bottom: 10%;
        cursor: pointer;
    }

    .fontTooltip {
        font-family:var(--default-font);
        font-weight: 400;
        font-size: 11px;
    }

    .fontTooltipNone {
        display: none;
    }
`

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    word-break: break-all;
    flex-grow: 1;
    span {
        font-weight: 700;
    }
`
// talvez
export const UrlPostContainer = styled.a`
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    display: flex;
    margin-top: 2%;
    text-decoration: none;
    color: inherit;
`
export const UrlPostText = styled.div`
    display: flex;
    flex-direction: column;
    word-break: break-all;
    justify-content: space-around;
    padding: 21px;
    width: 70%;
    
    h4 {
        font-family:var(--default-font);
        font-weight: 400;
        font-size: 16px;
        color: #CECECE;
        margin-bottom: 5px;
    }
    
    p {
        font-family:var(--default-font);
        font-weight: 400;
        font-size: 11px;
        color: #9B9595;
        margin-bottom: 13px;
    }
    a {
        text-decoration: none;
        color: #CECECE;
        font-family:var(--default-font);
        font-weight: 400;
        font-size: 11px;
    }
`
export const UrlPostImgFrame = styled.div`
    flex-grow: 1;
`
export const IconStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
export const NameAndButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    a {
        text-decoration: none;
        color: inherit
    }
`
export const EditAndDel = styled.div`
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
    width: 50px;
`
export const Input  = styled.input`
    height: 100%;
`