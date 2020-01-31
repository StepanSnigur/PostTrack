import React from 'react';
import styled from 'styled-components';

import { ITrackInfoEl } from '../Interfaces/Interfaces';

const TrackHeadlineWrapper = styled.div`
    width: 100%;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid #000;
    
    h3, h4 {
        padding-left: 20px;
        padding-right: 20px;
    }
`

const TrackHeadline: React.FC<Partial<ITrackInfoEl>> = (props) => {
    let {
        fromCountry,
        destinationCountry,
        trackUpdateDateTime,
        itemWeight,
        daysInTransit,
        maxDeliveryDays
    } = props;
    return (
        <TrackHeadlineWrapper>
            <h3>Точка отправки: {fromCountry || 'Неизвестно'}, Пункт назначения: {destinationCountry || 'Неизвестно'}</h3>
            <h3>В пути: {daysInTransit} дней, максимальный срок перевозки {maxDeliveryDays} дней</h3>
            <h3>Вес посылки: {itemWeight}</h3>
            <h4>Данные обновлены: {trackUpdateDateTime}</h4>
        </TrackHeadlineWrapper>
    )
}

export default TrackHeadline;