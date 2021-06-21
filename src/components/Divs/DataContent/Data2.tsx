import React from 'react'
import { Box2 } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle, SubTitle } from '../../Text/styles';
import { FaRegSun} from 'react-icons/fa'
import Circular from './Circular1/index';


const Data2: React.FC = () => {
    return (
        <Box2>
            <Header>
                <LittleTitle>Inspeções</LittleTitle>  
                <FaRegSun size="20px" />
            </Header>
            <SubTitle>status do dia</SubTitle>
            <Circular />
        </Box2>
    );
}

export default Data2;