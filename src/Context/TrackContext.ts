import React from 'react';
import { IAppContext } from '../Interfaces/Interfaces';

const TrackContext = React.createContext<Partial<IAppContext>>({});

export default TrackContext;