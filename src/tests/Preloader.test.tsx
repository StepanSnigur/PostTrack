import React from 'react';
import { mount } from "enzyme";
import TrackContext from '../Context/TrackContext';

import Preloader from '../components/Preloader';

describe('Preloader', () => {
    it('Correct preloader render', () => {
        const preloaderContext = {
            appState: {
                trackData: {
                    id: '',
                    data: {
                        events: [],
                        fromCountry: '',
                        destinationCountry: '',
                        trackUpdateDateTime: '',
                        itemWeight: 1,
                        daysInTransit: 1
                    },
                    deliveredStat: {
                        minDeliveryDays: 1,
                        averageDeliveryDays: 1,
                        maxDeliveryDays: 1,
                        type: ''
                    }
                },
                error: false,
                loading: true
            },
            getTrackInfo: (trackCode: string) => {},
            cleanTrackInfo: () => {},
            setError: (message: string | boolean) => {}
        }

        const preloader = mount(
            <TrackContext.Provider value={preloaderContext}>
                <Preloader />
            </TrackContext.Provider>
        )

        expect(preloader.find('Preloader').children().exists()).toBe(true);
    })
})