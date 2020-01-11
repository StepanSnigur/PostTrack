import React from 'react';
import styled from 'styled-components';

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

interface IErrorIndicator {
    errorMessage: string | boolean,
    setError(message: string | boolean): void
}
const ErrorIndicator: React.FC<IErrorIndicator> = ({ errorMessage, setError }) => {
    return (
        <>
            {
                errorMessage &&
                <ErrorMessageWrapper>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <CloseErrorMessage onClick={() => setError(false)}>&#10006;</CloseErrorMessage>
                </ErrorMessageWrapper>
            }
        </>
    )
}

export default ErrorIndicator;