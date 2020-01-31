import React, { useState } from 'react';
import styled from 'styled-components';
import TrackContext from '../Context/TrackContext';

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

const TrackCodeInput: React.FC = () => {
    const [trackInputValue, setTrackInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTrackInputValue(e.target.value);
    }

    return (
        <TrackContext.Consumer>
            {
                value => (
                    <TrackInputWrapper
                        onSubmit={(e: React.KeyboardEvent<HTMLFormElement>) => {
                            e.preventDefault();
                            value.getTrackInfo!(trackInputValue);
                        }}
                    >
                        <TrackInput
                            value={trackInputValue}
                            onChange={handleChange}
                            placeholder="Например: RF727913178SG"
                        />
                        <TrackInputButton>Отследить</TrackInputButton>
                    </TrackInputWrapper>
                )
            }
        </TrackContext.Consumer>
    )
}

export default TrackCodeInput;