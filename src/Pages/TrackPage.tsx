import React, { useEffect, useContext }  from 'react';
import TrackContext from '../Context/TrackContext';

import Preloader from '../components/Preloader';

import TrackInfoList from '../components/TrackInfoList';
import ErrorIndicator from '../components/ErrorIndicator';
import TrackHistoryBtn from '../components/TracksHistoryBtn';

const TrackPage: React.FC<{track: string}> = ({ track }) => {
    const trackContext = useContext(TrackContext);

    useEffect(() => {
        trackContext.cleanTrackInfo!();
        trackContext.getTrackInfo!(track);

        return trackContext.cleanTrackInfo
    }, []);

    return (
        <>
            <Preloader />
            <ErrorIndicator />
            <TrackInfoList />
            <TrackHistoryBtn role="backToMainPage" />
        </>
    )
}

export default TrackPage;