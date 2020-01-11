import React from 'react';
import styled from 'styled-components';

import TrackHeadline from './TrackHeadline';
import TrackInfoEl from './TrackInfoEl';

const TrackInfoWrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    margin-top: 60px;
    padding-bottom: 10px;
    border-radius: 10px;
    background: #fff;
`

interface ITrackIvent {
    id: string,
    eventDateTime: string,
    operationDateTime: string,
    operationAttribute: string,
    operationType: string,
    operationPlacePostalCode: string,
    operationPlaceName: string,
    itemWeight: string,
    source: string,
    serviceName: string,
    operationAttributeInformation: string,
    operationAttributeOriginal: string,
    operationTypeOriginal: string,
    operationPlaceNameOriginal: string,
    operationAttributeTranslated: string,
    operationTypeTranslated: string,
    operationPlaceNameTranslated: string
}
interface IData {
    events: ITrackIvent[],
    fromCountry: string,
    destinationCountry: string,
    trackUpdateDateTime: string,
    itemWeight: number,
    daysInTransit: number
}
interface ITrackState {
    minDeliveryDays: number,
    averageDeliveryDays: number,
    maxDeliveryDays: number,
    type: string
}
interface ITrackInfoList {
    trackData: IData,
    deliveredStat: ITrackState
}

const TrackInfoList: React.FC<ITrackInfoList> = ({ trackData, deliveredStat }) => {
    return (
        <TrackInfoWrapper>
            <TrackHeadline
                fromCountry={trackData.fromCountry}
                destinationCountry={trackData.destinationCountry}
                trackUpdateDateTime={trackData.trackUpdateDateTime}
                itemWeight={trackData.itemWeight}
                daysInTransit={trackData.daysInTransit}
                maxDeliveryDays={deliveredStat.maxDeliveryDays}
            />
            {
                trackData.events.map(trackState => {
                    return (
                        <TrackInfoEl
                            key={trackState.id}
                            trackEventData={trackState}
                        />
                    )
                })
            }
        </TrackInfoWrapper>
    )
}

export default TrackInfoList;