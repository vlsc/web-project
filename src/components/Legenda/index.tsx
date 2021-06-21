import React from "react";
import { Circle } from "../Circle/styles";
import { LegendBox } from "./Styles";
import { LegendText } from "../Text/styles";


const Legenda: React.FC = () => {
    return (
        <LegendBox>
            <Circle color="#7FC008"></Circle>
            <LegendText>Inspeções realizadas</LegendText>
            <Circle color="#DB8C28"></Circle>
            <LegendText>Planos de ação criados</LegendText>
        </LegendBox>
    )
}


export default Legenda;