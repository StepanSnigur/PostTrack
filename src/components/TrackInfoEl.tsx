import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { ITrackEventData } from '../Interfaces/Interfaces';

const TrackInfoElWrapper = styled.div`
    width: 100%;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    transition: .3s;
    
    &:hover {
        background: #eee;
    }
    
    h2, span, h5, p {
        margin: 0;
        padding: 0 20px;
    }
    h5 {
        font-weight: normal;
    }
    span {
        color: rgb(153, 153, 153);
    }
    h2 {
        font-size: 24px;
        line-height: 24px;
        font-weight: normal;
    }
    p {
        display: block;
        margin-top: 10px;
        max-height: ${(props: {isOpened: boolean, elHeight: number}) => (props.isOpened ? `${props.elHeight}px` : 0)};
        transition: .3s;
        overflow: hidden;
    }
`

interface ITrackInfoEl {
    trackEventData: ITrackEventData
}

const TrackInfoEl: React.FC<ITrackInfoEl> = ({ trackEventData }) => {
    let [isOpened, changeIsOpened] = useState(false);
    const TrackInfoEl: any = useRef<HTMLParagraphElement>(null);
    const {
        operationPlaceNameTranslated,
        operationAttributeTranslated,
        operationDateTime,
        operationAttributeInformation
    } = trackEventData;

    return (
        <>
            {operationAttributeTranslated && <TrackInfoElWrapper
                isOpened={isOpened}
                elHeight={TrackInfoEl.current ? TrackInfoEl.current.scrollHeight : 0}
                onClick={() => changeIsOpened(!isOpened)}
            >
                <h5>{operationPlaceNameTranslated}</h5>
                <h2>{operationAttributeTranslated}</h2>
                <span>{operationDateTime}</span>
                <p ref={TrackInfoEl}>{operationAttributeInformation}</p>
            </TrackInfoElWrapper>}
        </>
    )
}

export default TrackInfoEl;