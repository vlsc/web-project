import React from 'react'
import { Lateral, BigButton } from './styles'
import {FaBars} from 'react-icons/fa'

const Side: React.FC = () => {
    return (
        <div>
          <Lateral>
            <BigButton>
                <FaBars 
                    size='30%' 
                    style={{alignSelf:'center'}}
                />
            </BigButton>
        </Lateral>  
        </div> 
    )
}

export default Side;