import React, {useState} from 'react'
import { Ellipse, Options } from './styles';
import { LittleTitle } from '../Text/styles';
import { FaAngleDown } from 'react-icons/fa';

const Selector2: React.FC = () => {
    const[opened, setState] = useState(false);
    return (
        <Ellipse 
            style={{
                width:'auto', 
                marginTop:'20px',
                marginRight:'0'
            }} 
            onClick={() => setState(!opened)} height = {opened? 60:28}
        >  
            <Options>
                <LittleTitle>pendente</LittleTitle>
                <LittleTitle>concluído</LittleTitle>
            </Options>
            <FaAngleDown size="20px" />  
        </Ellipse>
    )
}

export default Selector2;