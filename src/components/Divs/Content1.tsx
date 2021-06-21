import React from 'react'
import { LeftDiv, SubLeftDiv } from './styles';
import Data1 from './DataContent/Data1';
import Data2 from './DataContent/Data2';
import Data3 from './DataContent/Data3';
import Data4 from './DataContent/Data4';

const Content1: React.FC = () => {
    return (
        <LeftDiv>
            <Data1 />
            <SubLeftDiv>
                <Data2 />
                <Data3 />
            </SubLeftDiv>
            <Data4 />
        </LeftDiv>
    );
}

export default Content1;