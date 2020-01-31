import React from 'react';
import styled from 'styled-components';
import TrackContext from '../Context/TrackContext';

import { ITrackEventData } from '../Interfaces/Interfaces';

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

const TrackInfoList: React.FC = () => {
    return (
        <TrackContext.Consumer>
            {
                value => {
                    let trackData = value.appState!.trackData!;
                    return (
                        trackData.id &&
                        <TrackInfoWrapper>
                            <TrackHeadline
                                fromCountry={trackData.data.fromCountry}
                                destinationCountry={trackData.data.destinationCountry}
                                trackUpdateDateTime={trackData.data.trackUpdateDateTime}
                                itemWeight={trackData.data.itemWeight}
                                daysInTransit={trackData.data.daysInTransit}
                                maxDeliveryDays={trackData.deliveredStat.maxDeliveryDays}
                            />
                            {
                                trackData.data.events.map((trackState: ITrackEventData) => {
                                    return (
                                        <TrackInfoEl
                                            key={trackState.id!}
                                            trackEventData={trackState!}
                                        />
                                    )
                                })
                            }
                        </TrackInfoWrapper>
                    )
                }
            }
        </TrackContext.Consumer>
    )
}

export default TrackInfoList;