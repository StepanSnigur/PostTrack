interface IService {
    apiKey: string,
    domain: string,
    makeRequest(url: string, options?: object): Promise<object>,
    getTrackInfo(trackCode: string): Promise<object>
}

const Service: IService = {
    apiKey: 'f9943669f6fd4fc455da110b69bcc8a8',
    domain: 'trackmypost.000webhostapp.com',

    makeRequest (url: string, options: object = {}): Promise<any> {
        return fetch(url, options).then(res => res.json())
    },

    getTrackInfo (trackCode: string): Promise<object> {
        return this.makeRequest(`https://api.track24.ru/tracking.json.php?apiKey=${this.apiKey}&domain=${this.domain}&pretty=true&code=${trackCode}&lng=ru`, {
            method: 'GET'
        })
    }
}

export default Service;