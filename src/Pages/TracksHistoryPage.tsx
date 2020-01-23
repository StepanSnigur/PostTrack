import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TrackHistoryBtn from '../components/TracksHistoryBtn';

const TrackHistoryWrapper = styled.div`
    width: 600px;
    margin: 0 auto;
`
const TrackHistoryHeadline = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 48px;
`
const TrackCode = styled(Link)`
    display: block;
    padding: 20px;
    margin-top: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: .3s;
    
    &:hover {
        background: #eee;
        color: #000;
    }
`
const TrackHistoryEmpty = styled.h3`
    text-align: center;
    color: #fff;
    font-size: 40px;
`
const CleanTrackHistoryButton = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    padding: 15px 25px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
`

const TracksHistoryPage = () => {
    const [historyTracks, setTracksFromHistory] = useState([]);
    const getTracks = useCallback(() => JSON.parse(localStorage.getItem('TracksHistory')!), []);

    useEffect(() => setTracksFromHistory(getTracks() || []), [getTracks]);

    const cleanTrackHistory = () => {
        setTracksFromHistory([]);
        localStorage.removeItem('TracksHistory');
    }

    const isTracksInHistory = historyTracks.length > 0;
    return (
        <TrackHistoryWrapper>
            <TrackHistoryHeadline>История отслеживаний</TrackHistoryHeadline>
            {
                isTracksInHistory ?
                <>{historyTracks.map((track: string, index: number) => <TrackCode to={`/history/${track}`} key={index}>{track}</TrackCode>)}</> :
                <TrackHistoryEmpty>История пуста</TrackHistoryEmpty>
            }
            {isTracksInHistory && <CleanTrackHistoryButton onClick={cleanTrackHistory}>Очистить историю</CleanTrackHistoryButton>}
            <TrackHistoryBtn role="backToMainPage" />
        </TrackHistoryWrapper>
    )
}

export default TracksHistoryPage;