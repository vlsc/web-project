import React from 'react'
import { DataDiv } from './styles';
import Content1 from './Content1';
import Content2 from './Content2';

const Boxes: React.FC = () => {
  return (
    <DataDiv>
        <Content1 />
        <Content2 />
    </DataDiv>
  );
}

export default Boxes;