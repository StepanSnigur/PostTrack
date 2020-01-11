import React from 'react';
import styled from 'styled-components';

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

interface ITrackInfoEl {
    fromCountry: string,
    destinationCountry: string,
    trackUpdateDateTime: string,
    itemWeight: number,
    daysInTransit: number,
    maxDeliveryDays: number
}

const TrackHeadline: React.FC<ITrackInfoEl> = (props) => {
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
            <h3>Точка отправки: {fromCountry}, Пункт назначения: {destinationCountry}</h3>
            <h3>В пути: {daysInTransit} дней, максимальный срок перевозки {maxDeliveryDays} дней</h3>
            <h3>Вес посылки: {itemWeight}</h3>
            <h4>Данные обновлены: {trackUpdateDateTime}</h4>
        </TrackHeadlineWrapper>
    )
}

export default TrackHeadline;