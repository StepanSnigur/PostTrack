export interface IAppContext {
    appState: IAppState,
    getTrackInfo: (trackCode: string) => void,
    cleanTrackInfo: () => void,
    setError: (message: string | boolean) => void
}

export interface IAppState {
    trackData: IAppTrackState | null,
    error: boolean | string,
    loading: boolean
}

export interface IAppTrackState {
    id?: string,
    data: IMainTrackData,
    deliveredStat: Partial<ITrackState>
}

export interface ITrackEventData {
    id: string,
    eventDateTime: string,
    operationDateTime: string,
    operationAttribute: string,
    operationType: string,
    operationPlacePostalCode: string,
    operationPlaceName: string,
    itemWeight: string,
    source: string,
    serviceName: string,
    operationAttributeInformation: string,
    operationAttributeOriginal: string,
    operationTypeOriginal: string,
    operationPlaceNameOriginal: string,
    operationAttributeTranslated: string,
    operationTypeTranslated: string,
    operationPlaceNameTranslated: string
}

export interface ITrackInfoEl {
    fromCountry: string,
    destinationCountry: string,
    trackUpdateDateTime: string,
    itemWeight: number,
    daysInTransit: number,
    maxDeliveryDays: number
}

export interface ITrackData {
    status: string,
    id: string,
    message: string,
    data: IMainTrackData,
    deliveredStat: Partial<ITrackState>
}

export interface ITrackState {
    minDeliveryDays: number,
    averageDeliveryDays: number,
    maxDeliveryDays: number,
    type: string
}

export interface IMainTrackData {
    events: ITrackEventData[],
    fromCountry?: string,
    destinationCountry?: string,
    trackUpdateDateTime?: string,
    itemWeight?: number,
    daysInTransit?: number
}