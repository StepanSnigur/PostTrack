import React, { Component } from 'react';
import styled from 'styled-components';

import TrackCodeInput from '../components/TrackCodeInput';
import Preloader from '../components/Preloader';
import ErrorIndicator from '../components/ErrorIndicator';
import TrackInfoList from '../components/TrackInfoList';
import { IAppState, IData } from '../Interfaces/Interfaces';
import TrackHistoryBtn from "../components/TracksHistoryBtn";

const MainHeadline = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 48px;
`

class MainPage extends Component {
    state = {
        trackData: {
            id: undefined,
            data: {
                events: [],
                fromCountry: undefined,
                destinationCountry: undefined,
                trackUpdateDateTime: undefined,
                itemWeight: undefined,
                daysInTransit: undefined
            },
            deliveredStat: {
                minDeliveryDays: undefined,
                averageDeliveryDays: undefined,
                maxDeliveryDays: undefined,
                type: undefined
            }
        },
        error: false,
        loading: false
    }

    loadTrackInfo = (data: IData) => {
        this.setState({
            trackData: data
        })
    }
    setLoading = () => {
        this.setState((prevState: IAppState) => {
            return {
                loading: !prevState.loading
            }
        })
    }
    setError = (message: string | boolean) => {
        this.setState({
            error: message
        })
    }

    render () {
        return (
            <>
                <MainHeadline>Введите трек-номер заказа</MainHeadline>
                <TrackCodeInput
                    loadTrackInfo={this.loadTrackInfo}
                    setLoading={this.setLoading}
                    setError={this.setError}
                />
                <Preloader isLoading={this.state.loading} />
                <ErrorIndicator
                    errorMessage={this.state.error}
                    setError={this.setError}
                />
                <TrackInfoList
                    trackData={this.state.trackData.data}
                    deliveredStat={this.state.trackData.deliveredStat}
                    id={this.state.trackData.id}
                />
                <TrackHistoryBtn role="openHist" />
            </>
        )
    }
}

export default MainPage;