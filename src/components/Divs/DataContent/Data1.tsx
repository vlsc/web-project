import React from 'react'
import { HistBox } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle } from '../../Text/styles';
import Seletor from '../../Selector/index';
import Legenda from '../../Legenda/index';
import AppProvider from '../../../context/Provider';
import Barras from './Barras/index';

const Data1: React.FC = () => {
    return (
        <HistBox>
            <AppProvider>
                <Header>
                    <LittleTitle>Histórico de eventos</LittleTitle>
                    <Seletor />
                </Header>
                <Barras />
                <Legenda/>
            </AppProvider>
        </HistBox>
    );
}

export default Data1;