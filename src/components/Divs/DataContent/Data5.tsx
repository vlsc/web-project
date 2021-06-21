import React from 'react'
import { Box2Solo } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle, SubTitle } from '../../Text/styles';
import { FaRegSun} from 'react-icons/fa'
import Circular3 from './Circular2/index2';


const Data5: React.FC = () => {
    return (
        <Box2Solo>
            <Header>
                <LittleTitle>Planos de ação</LittleTitle>    
                <FaRegSun size="20px" />
            </Header>
            <SubTitle>visão geral</SubTitle>
            <Circular3 />
        </Box2Solo>
    );
}

export default Data5;