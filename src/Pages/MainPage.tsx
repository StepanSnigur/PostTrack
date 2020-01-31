import React from 'react';
import styled from 'styled-components';

import TrackCodeInput from '../components/TrackCodeInput';
import Preloader from '../components/Preloader';
import ErrorIndicator from '../components/ErrorIndicator';
import TrackInfoList from '../components/TrackInfoList';
import TrackHistoryBtn from "../components/TracksHistoryBtn";

const MainHeadline = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 48px;
`

const MainPage = () => {
    return (
        <>
            <MainHeadline>Введите трек-номер заказа</MainHeadline>
            <TrackCodeInput />
            <Preloader />
            <ErrorIndicator />
            <TrackInfoList />
            <TrackHistoryBtn role="openHist" />
        </>
    )
}

export default MainPage;