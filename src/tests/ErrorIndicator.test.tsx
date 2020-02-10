import React from 'react';
import { mount } from "enzyme";
import TrackContext from '../Context/TrackContext';

import ErrorIndicator from '../components/ErrorIndicator';

describe('ErrorIndicator', () => {
    it('Correct ErrorIndicator render', () => {
        const errorIndicatorContext = {
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
                error: true,
                loading: false
            },
            getTrackInfo: (trackCode: string) => {},
            cleanTrackInfo: () => {},
            setError: (message: string | boolean) => {}
        }

        const errorIndicator = mount(
            <TrackContext.Provider value={errorIndicatorContext}>
                <ErrorIndicator />
            </TrackContext.Provider>
        )

        expect(errorIndicator.find('ErrorIndicator').children().exists()).toBe(true)
    })
})