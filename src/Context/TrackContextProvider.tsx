import React, { Component } from 'react';
import TrackContext from './TrackContext';
import { IAppState, ITrackData } from '../Interfaces/Interfaces';
import Service from '../Service/Service';

class TrackContextProvider extends Component {
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

    getTrackInfo = async (trackCode: string) => {
        try {
            this.setLoading();
            this.setError(false);

            let data: Partial<ITrackData> = await Service.getTrackInfo(trackCode);
            if (data.status === 'error') throw new Error(data.message);

            const newTrackHistory: string[] = JSON.parse(localStorage.getItem('TracksHistory')!) || [];
            if (!newTrackHistory.includes(trackCode)) {
                newTrackHistory.push(trackCode);
                localStorage.setItem('TracksHistory', JSON.stringify(newTrackHistory));
            }
            this.loadTrackInfo(data);
        } catch (e) {
            this.setError(e.message)
        } finally {
            this.setLoading();
        }
    }
    cleanTrackInfo = () => {
        this.setState({
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
            }
        })
    }

    loadTrackInfo = (data: Partial<ITrackData>) => {
        this.setState({
            trackData: {
                ...this.state.trackData,
                id: data.id,
                data: data.data,
                deliveredStat: data.deliveredStat
            }
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
        let providerValue = {
            appState: this.state,
            getTrackInfo: this.getTrackInfo,
            cleanTrackInfo: this.cleanTrackInfo,
            setError: this.setError
        }

        return (
            <TrackContext.Provider value={providerValue}>
                {this.props.children}
            </TrackContext.Provider>
        )
    }
}

export default TrackContextProvider;