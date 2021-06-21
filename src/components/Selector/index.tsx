import React, {useState} from 'react'
import { Ellipse, Options, EllipseDiv } from './styles';
import { LittleTitle } from '../Text/styles';
import { FaAngleDown, FaRegSun } from 'react-icons/fa';

//resolvi criar meu próprio componente seletor
//não está funcional, mas poderia estar, talvez com mais tempo
const Selector: React.FC = () => {
    const[opened, setState] = useState(false);
    return (
        <EllipseDiv>
            <Ellipse onClick={() => setState(!opened)} height = {opened? 120:28}>  
                <Options>
                    <LittleTitle >diário</LittleTitle>
                    <LittleTitle>semanal</LittleTitle>
                    <LittleTitle>mensal</LittleTitle>
                    <LittleTitle>anual</LittleTitle>
                </Options>
                <FaAngleDown size="20px"/>  
            </Ellipse>
            <FaRegSun size="20px" style={{margin: '2px'}} />
       </EllipseDiv>
    )
}

export default Selector;