import React from 'react';
import styled, { keyframes } from 'styled-components';
import TrackContext from '../Context/TrackContext';

const slide = keyframes`
    0% {
        clip: rect(0, 0, 20px, 0);
    }
    30% {
        clip: rect(0, 80px, 20px, 0);
    }
    50% {
        clip: rect(0, 80px, 20px, 0);
    }
    80% {
        clip: rect(0, 80px, 20px, 80px);
    }
    100% {
        clip: rect(0, 80px, 20px, 80px);
    }
`
const fade = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
const PreloaderContainer = styled.div`
    position: relative;
    width: 80px;
    height: 60px;
    margin: 0 auto;
    margin-top: 30px;
`
const PreloaderLines = styled.div`
    width: 80px;
    height: 40px;
    position: absolute;
`
const PreloaderLine1 = styled.div`
    width: 80px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    clip: rect(0, 0, 20px, 0);
    top: 0;
    animation: ${slide} 2s ease 0s infinite;
`
const PreloaderLine2 = styled.div`
    width: 80px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    clip: rect(0, 0, 20px, 0);
    top: 15px;
    animation: ${slide} 2s ease 0.25s infinite;
`
const PreloaderLine3 = styled.div`
    width: 80px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    clip: rect(0, 0, 20px, 0);
    top: 30px;
    animation: ${slide} 2s ease 0.5s infinite;
`
const PreloaderText = styled.div`
    position: absolute;
    top: 50px;
    text-align: center;
    width: 100%;
    color: #fff;
    font-size: 13px;
    font-family: sans-serif;
    letter-spacing: 3px;
    line-height: 10px;
    height: 10px;
    animation: ${fade} 1s ease 0s infinite;
`

const Preloader: React.FC = () => {
    return (
        <TrackContext.Consumer>
            {
                value => (
                    value.appState!.loading &&
                    <PreloaderContainer>
                        <PreloaderLines>
                            <PreloaderLine1></PreloaderLine1>
                            <PreloaderLine2></PreloaderLine2>
                            <PreloaderLine3></PreloaderLine3>
                        </PreloaderLines>
                        <PreloaderText>ЗАГРУЗКА</PreloaderText>
                    </PreloaderContainer>
                )
            }
        </TrackContext.Consumer>
    )
}

export default Preloader;