import React, {useContext} from 'react'
import AppContext from '../../../../context/Context'
import { ContentArea } from './styles'
import { LegendBox, LegendBoxMean } from '../../../Legenda/Styles'
import { LegendText, SubTitle } from '../../../Text/styles'
import { Circle } from '../../../Circle/styles'
import { Doughnut, defaults } from 'react-chartjs-2'

defaults.plugins.legend.display = false;
defaults.responsive = true

const count = (data: any, v: number) =>{
    var count = 0;
    for(let i=0; i<data.length; i++){
        if(data[i].situacao == v){
            count+=1
        }
    }
    return ((count/data.length)*100).toFixed(2);
}

const mean = (data:any) => {
    var count = 0;
    for(let i=0; i<data.length; i++){
        count+=data[i].duracao
    }
    return Math.round(count/data.length);
}

const Circular1: React.FC = () => {
    const { InspData } = useContext(AppContext)
    return (
        <>
            <div 
                style={{
                    display: 'flex', 
                    justifyContent:'center', 
                    height:"150px"
                }}
            >
                <div style={{width:"150px"}}>
                    <Doughnut 
                        width={600}
                        height={100}
                        type='doughnut'
                        data={{
                            labels: ['realizadas','em aberto','não realizadas'],
                            datasets:[{
                                label: 'inspeções',
                                data: [count(InspData,1), count(InspData,0), count(InspData,-1)],
                                backgroundColor:['green', 'orange', 'red'],
                            }]
                        }}
                        options={{
                            maintainAspectRatio: false,
                            cutout: 60
                        }}
                    />
                </div>
            </div>
                <ContentArea>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}>
                        <LegendBox style={{marginTop:"20px"}}>
                            <Circle color="#7FC008"></Circle>
                            <LegendText>Realizadas - {count(InspData, 1)}%</LegendText>
                            <Circle color="#DB8C28"></Circle>
                            <LegendText>Em aberto - {count(InspData, 0)}%</LegendText>
                            <Circle color="#EB5757"></Circle>
                            <LegendText>Não realizadas - {count(InspData, -1)}%</LegendText>
                        </LegendBox>
                        <LegendBoxMean>
                            <SubTitle style={{marginBottom:"10px", width:"140px", fontSize:'10px'}}>Média de tempo</SubTitle>
                            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                <div>
                                    <LegendText>Hoje</LegendText>
                                    <LegendText>Ultimos 7 dias</LegendText>
                                    <LegendText>Ultimos 30 dias</LegendText>  
                                </div>
                                <div>
                                    <LegendText>{mean(InspData)} min</LegendText>
                                    <LegendText>{mean(InspData)} min</LegendText>
                                    <LegendText>{mean(InspData)} min</LegendText>
                                </div>
                            </div>
                        </LegendBoxMean>
                    </div>
            </ContentArea>
        </> 
    );
}

export default Circular1;