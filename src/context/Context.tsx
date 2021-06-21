import React, { createContext } from 'react'


interface con{
    HistData: any,
    InspData: any,
    PlansData: any,
}

const AppContext = createContext<con>({} as con);

export default AppContext;