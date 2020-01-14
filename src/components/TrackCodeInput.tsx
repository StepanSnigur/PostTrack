import React, { useState } from 'react';
import styled from 'styled-components';
import Service from '../Service/Service';

const TrackInputWrapper = styled.form`
    display: flex;
    margin: 0 auto;
    width: 600px;
    height: 80px;
    justify-content: space-between;
`
const TrackInput = styled.input`
    display: block;
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    padding: 10px 30px;
    font-size: 36px;
    
    &::placeholder {
        font-size: 26px;
    }
`
const TrackInputButton = styled.button`
    display: block;
    width: 25%;
    height: 100%;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
`

interface ITrackCodeInput {
    loadTrackInfo(trackData: object): void,
    setLoading(): void,
    setError(message: string | boolean): void
}

interface ITrackData {
    status?: string,
    id?: string,
    message?: string
}

const TrackCodeInput: React.FC<ITrackCodeInput> = (props) => {
    const [trackInputValue, setTrackInputValue] = useState('');

    const getTrackInfo = async (trackCode: string) => {
        try {
            props.setLoading();
            props.setError(false);

            let data: ITrackData = await Service.getTrackInfo(trackCode);
            console.log(data)
            if (data.status === 'error') throw new Error(data.message);

            props.loadTrackInfo(data);
        } catch (e) {
            props.setError(e.message)
        } finally {
            props.setLoading();
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTrackInputValue(e.target.value);
    }
    const handleSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault();
        getTrackInfo(trackInputValue);
    }

    return (
        <TrackInputWrapper onSubmit={handleSubmit}>
            <TrackInput
                value={trackInputValue}
                onChange={handleChange}
                placeholder="Например: RF727913178SG"
            />
            <TrackInputButton>Отследить</TrackInputButton>
        </TrackInputWrapper>
    )
}

export default TrackCodeInput;