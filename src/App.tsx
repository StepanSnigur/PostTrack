import React, { Component } from 'react';
import styled from 'styled-components';

import TrackCodeInput from './components/TrackCodeInput';
import TrackInfoList from './components/TrackInfoList';
import ErrorIndicator from './components/ErrorIndicator';
import Preloader from './components/Preloader';

const MainWrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background: rgb(2,0,36);
    background: linear-gradient(27deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%);
`
const MainHeadline = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 48px;
`

interface IState {
    trackData: object | null,
    error: boolean,
    loading: boolean
}
interface IData {
    data: object
}

class App extends Component {
    state = {
        trackData: {
            data: {
                trackCreationDateTime: "06.01.2020 11:43:31",
                trackUpdateDateTime: "07.01.2020 11:49:40",
                trackUpdateDiffMinutes: 0,
                trackDeliveredDateTime: "",
                fromCountryCode: "HK",
                fromCountry: "Гонк-Конг",
                destinationName: "",
                destinationCountryCode: "RU",
                destinationCountry: "Россия",
                destinationPostalCode: "",
                destinationCity: "",
                destinationAddress: "",
                collectOnDeliveryPrice: "",
                declaredValue: "",
                deliveredStatus: "0",
                trackCodeModified: "",
                events: [
                    {
                        id: "2572264765",
                        eventDateTime: "06.01.2020 11:43:56",
                        operationDateTime: "04.12.2019 12:08:00",
                        operationAttribute: "Прием",
                        operationType: "",
                        operationPlacePostalCode: "",
                        operationPlaceName: "Гонконг AMC",
                        itemWeight: "0",
                        source: "rupost",
                        serviceName: "Почта России",
                        operationAttributeInformation: "Означает, что зарубежный отправитель (продавец) принес" +
                            " Вашу посылку в местное почтовое отделение. При этом заполнил все необходимые документы, включая таможенную декларацию (формы CN 22 или CN 23). В это время отправлению присваивается уникальный почтовый идентификатор – специальный штриховой код (Трек-номер, Трек-код). Он находится в чеке (или квитанции), выдаваемом при приеме почтового отправления. Операция «Прием» показывает место, дату и страну приема отправления. После приема посылка движется на пути к месту международного обмена.",
                        operationAttributeOriginal: "Прием",
                        operationTypeOriginal: "",
                        operationPlaceNameOriginal: "Гонконг AMC",
                        operationAttributeTranslated: "Прием",
                        operationTypeTranslated: "",
                        operationPlaceNameTranslated: "Гонконг AMC"
                    }
                ],
                itemWeight: 0,
                trackFirstOperationDateTime: "01.12.2019 20:30:07",
                daysInTransit: 37,
                daysTracking: 2,
                groupedCompanyNames: ["Cainiao", "4PX Express", "Hong-Kong Post", "Почта России"],
                groupedEvents: []
            },
            deliveredStat: {
                minDeliveryDays: 32,
                averageDeliveryDays: 45,
                maxDeliveryDays: 65,
                type: "Регистрируемое почтовое отправление"
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
        this.setState((prevState: IState) => {
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
                />
            </MainWrapper>
        );
    }
}

export default App;
