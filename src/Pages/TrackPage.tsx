import React, { Component } from 'react';

import Preloader from '../components/Preloader';
import {IAppState, ITrackData} from '../Interfaces/Interfaces';
import Service from '../Service/Service';

import TrackInfoList from '../components/TrackInfoList';
import ErrorIndicator from '../components/ErrorIndicator';
import TrackHistoryBtn from '../components/TracksHistoryBtn';

class TrackPage extends Component<{track: string}> {
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

    componentDidMount() {
        this.getTrackInfo(this.props.track);
    }

    getTrackInfo = async (trackCode: string) => {
        try {
            this.setError(false);
            this.setLoading();

            let data: ITrackData = await Service.getTrackInfo(trackCode);
            if (data.status === 'error') throw new Error(data.message);

            this.setState({
                trackData: data
            });
        } catch (e) {
            this.setError(e.message)
        } finally {
            this.setLoading();
        }
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
                <Preloader isLoading={this.state.loading}/>
                <ErrorIndicator
                    errorMessage={this.state.error}
                    setError={this.setError}
                />
                <TrackInfoList
                    trackData={this.state.trackData.data}
                    deliveredStat={this.state.trackData.deliveredStat}
                    id={this.state.trackData.id}
                />
                <TrackHistoryBtn role="backToMainPage" />
            </>
        );
    }
}

export default TrackPage;