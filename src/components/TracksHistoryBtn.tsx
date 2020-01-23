import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TrackHistoryBtnWrapper = styled(Link)`
    position: fixed;
    top: 30px;
    right: 30px;
    padding: 15px 25px;
    border-radius: 10px;
    background: #f0f0f0;
    text-decoration: none;
    cursor: pointer;
`

interface ITracksHistoryBtn {
    role: string
}

const TrackHistoryBtn: React.FC<ITracksHistoryBtn> = ({ role }) => {
    let isOpeningHistory = role === 'openHist';
    return <TrackHistoryBtnWrapper to={isOpeningHistory ? '/TracksHistory' : '/'}>{isOpeningHistory ? 'История отслеживаний' : 'Назад'}</TrackHistoryBtnWrapper>
}

export default TrackHistoryBtn;