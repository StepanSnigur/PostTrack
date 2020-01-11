import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext({
    trackCode: null,
    trackData: null,
    loadTrackData: (data: object) => {},
    setTrackCode: (trackCode: string) => {},
});

class TrackContextProvider extends Component {
    state = {
        trackCode: null,
        trackData: null
    }

    loadTrackData = (data: object) => {
        this.setState({
            trackData: data
        })
    }

    setTrackCode = (trackCode: string) => {
        this.setState({
            trackCode
        })
    }

    render(): React.ReactElement {
        let { trackCode, trackData } = this.state;
        return (
            <Provider
                value={{
                    trackCode,
                    trackData,
                    loadTrackData: this.loadTrackData,
                    setTrackCode: this.setTrackCode
                }}
            >
                {this.props.children}
            </Provider>
        )
    }
}

export {
    TrackContextProvider,
    Consumer as TrackContextConsumer
}