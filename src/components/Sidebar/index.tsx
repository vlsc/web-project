import React, { useState } from 'react'
import { Body, Button, Panel, DivSidebar } from './styles'
import { FaAngleLeft, FaChartBar } from 'react-icons/fa'

const Sidebar: React.FC = () => {
    //o pressed serve para dizer se o usuário pressionou o botão ou não
    //a partir disso, as alterações são feitas
    const[pressed, setPressed] = useState(false);
    return (
        <DivSidebar width={pressed? 20:170} height={pressed? 10: 60}>
            <Body width={pressed? 20:170} height={pressed? 10: 60}>
                <Button onClick={() => setPressed(!pressed)}>
                    <FaAngleLeft 
                        color="white" 
                        size="100%" 
                        style={{transform: pressed?'rotate(180deg)':'rotate(0deg)'}}
                    />
                </Button>
                <span style={{visibility: pressed?'hidden':'visible'}}>
                    <Panel>
                        <FaChartBar  
                            size={pressed? '0px' : '20px'} 
                            style={{verticalAlign:'text-bottom'}}
                        />
                            Painel de Controle
                    </Panel>
                </span>
            </Body>
        </DivSidebar>
    )
}

export default Sidebar;