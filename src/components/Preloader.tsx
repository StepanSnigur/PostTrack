import React from 'react';
import styled from 'styled-components';

interface IPreloader {
    isLoading: boolean
}

const Preloader: React.FC<IPreloader> = ({ isLoading }) => <>{isLoading && <h1>loading</h1>}</>

export default Preloader;