import React from 'react'
import { Box } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle } from '../../Text/styles';
import Seletor from '../../Selector/index';
import { SearchForm } from '../../Search/Styles';
import List from './List/index';

const Data4: React.FC = () => {
    return (
        <Box>
            <Header>
                <LittleTitle>Inspeções agendadas</LittleTitle> 
                <Seletor /> 
            </Header>
            <div />
        <div>
           <SearchForm>Pesquise</SearchForm> 
            <List />
        </div>
    </Box>
    );
}

export default Data4;