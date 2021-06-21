import React from 'react'
import { PlansBox } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle, SubTitle } from '../../Text/styles';
import { FaRegSun} from 'react-icons/fa'
import { SearchForm } from '../../Search/Styles';
import Seletor2 from '../../Selector/index2';
import List2 from './List2';

const Data6: React.FC = () => {
    return (
        <PlansBox>
            <Header>
                <LittleTitle>Planos de ação</LittleTitle>    
                <FaRegSun size="20px" />
            </Header>
            <SubTitle>atualizações</SubTitle>
            <div>
                <SearchForm>Pesquise</SearchForm>
                <Seletor2 />
                <List2 />
            </div>
        </PlansBox>
    );
}

export default Data6;