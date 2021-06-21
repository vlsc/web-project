import { ReactNode } from "react";
import AppContext from "./Context";
import Historic from '../components/mock/histEv.json'
import Inspections from '../components/mock/insp.json'
import Plans from '../components/mock/planos.json'


interface Iprops{
    children?:ReactNode
}


const AppProvider = ({children}:Iprops) => {
    return(
        <AppContext.Provider value = {{  HistData: Historic, InspData: Inspections, PlansData: Plans }}>
            {children}
        </AppContext.Provider>
    )

}

export default AppProvider;