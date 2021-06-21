import React from 'react'
import { Box2 } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle, SubTitle } from '../../Text/styles';
import { FaRegSun} from 'react-icons/fa'
import Circular2 from './Circular2/index';

const Data3: React.FC = () => {
    return (
        <Box2>
            <Header>
                <LittleTitle>Planos de ação</LittleTitle> 
                <FaRegSun size="20px" />
            </Header>
            <SubTitle>status do dia</SubTitle>
            <Circular2 />
        </Box2>
    );
}

export default Data3;