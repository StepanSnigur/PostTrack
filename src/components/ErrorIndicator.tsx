import React from 'react';
import styled from 'styled-components';
import TrackContext from '../Context/TrackContext';

const ErrorMessageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    margin: 0 auto;
    margin-top: 15px;
    box-sizing: border-box;
    border-radius: 10px;
    background: #ffa938;
    padding: 0 15px;
`
const ErrorMessage = styled.h3`
    font-size: 24px;
    color: #fff;
`
const CloseErrorMessage = styled.button`
    border: none;
    background: inherit;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
`
const ErrorIndicator: React.FC = () => {
    return (
        <TrackContext.Consumer>
            {
                value => (
                    value.appState!.error &&
                    <ErrorMessageWrapper>
                        <ErrorMessage>{value.appState!.error}</ErrorMessage>
                        <CloseErrorMessage onClick={() => value.setError!(false)}>&#10006;</CloseErrorMessage>
                    </ErrorMessageWrapper>
                )
            }
        </TrackContext.Consumer>
    )
}

export default ErrorIndicator;