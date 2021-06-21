import React from 'react'
import { Principal } from './styles';
import { Title } from '../Text/styles';
import Boxes from './Boxes';

const MainDiv: React.FC = () => {
    return (
      <Principal>
        <Title>Painel de Controle</Title>
        <Boxes />
      </Principal> 
    );
}

export default MainDiv;
