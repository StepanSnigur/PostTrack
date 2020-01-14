import React from 'react';
import styled from 'styled-components';

import { ITrackEventData, ITrackState, IMainTrackData } from '../Interfaces/Interfaces';

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

interface ITrackInfoList {
    trackData: IMainTrackData,
    deliveredStat: ITrackState,
    id?: string
}

const TrackInfoList: React.FC<ITrackInfoList> = ({ trackData, deliveredStat, id }) => {
    return (
        <>
            {id && <TrackInfoWrapper>
            <TrackHeadline
                fromCountry={trackData.fromCountry}
                destinationCountry={trackData.destinationCountry}
                trackUpdateDateTime={trackData.trackUpdateDateTime}
                itemWeight={trackData.itemWeight}
                daysInTransit={trackData.daysInTransit}
                maxDeliveryDays={deliveredStat.maxDeliveryDays}
            />
            {
                trackData.events.map((trackState: ITrackEventData) => {
                    return (
                        <TrackInfoEl
                            key={trackState.id!}
                            trackEventData={trackState!}
                        />
                    )
                })
            }
            </TrackInfoWrapper>}
        </>
    )
}

export default TrackInfoList;