import React  from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TrackContextProvider from './Context/TrackContextProvider';
import MainPage from './Pages/MainPage';
import TracksHistoryPage from './Pages/TracksHistoryPage';
import TrackPage from './Pages/TrackPage';

const MainWrapper = styled.div`
    min-height: 100vh;
    padding-top: 50px;
    padding-bottom: 50px;
    background: rgb(2,0,36);
    background: linear-gradient(27deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%);
    box-sizing: border-box;
`

const App = () => {
    return (
        <MainWrapper>
            <TrackContextProvider>
                <Router>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/TracksHistory" component={TracksHistoryPage}/>

                    <Route path="/history/:track" render={({match}) => <TrackPage track={match.params.track} />}/>
                </Router>
            </TrackContextProvider>
        </MainWrapper>
    )
}

export default App;
