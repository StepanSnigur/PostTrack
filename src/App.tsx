import React, { Component } from 'react';
import styled from 'styled-components';

import { IAppState, IData } from './Interfaces/Interfaces';

import TrackCodeInput from './components/TrackCodeInput';
import TrackInfoList from './components/TrackInfoList';
import ErrorIndicator from './components/ErrorIndicator';
import Preloader from './components/Preloader';

const MainWrapper = styled.div`
    min-height: 100vh;
    padding-top: 50px;
    padding-bottom: 50px;
    background: rgb(2,0,36);
    background: linear-gradient(27deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%);
    box-sizing: border-box;
`
const MainHeadline = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 48px;
`

class App extends Component {
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
            <MainWrapper>
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
            </MainWrapper>
        );
    }
}

export default App;
