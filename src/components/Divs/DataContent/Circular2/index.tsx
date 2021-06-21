import React, {useContext} from 'react'
import AppContext from '../../../../context/Context'
import { ContentArea } from '../Circular1/styles'
import { LegendBox, LegendBoxMean } from '../../../Legenda/Styles'
import { LegendText, SubTitle } from '../../../Text/styles'
import { Circle } from '../../../Circle/styles'
import { Doughnut } from 'react-chartjs-2'


const count = (data: any, v: number) =>{
    var count = 0;
    for(let i=0; i<data.length; i++){
        if(data[i].situacao == v){
            count+=1
        }
    }
    return ((count/data.length)*100).toFixed(2);
}

const mean = (data: any) => {
    var count = 0;
    for(let i=0; i<data.length; i++){
        count+=data[i].duracao
    }
    return Math.round(count/data.length);
}

const Circular2: React.FC = () => {
    const { PlansData } = useContext(AppContext)
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
                            labels: ['criados','finalizados','em aberto'],
                            datasets:[{
                                label: 'inspeções',
                                data: [count(PlansData,1), count(PlansData,0), count(PlansData,-1)],
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
                <div style={{display:"flex", flexDirection:"row"}}>
                    <LegendBox style={{marginTop:"20px"}}>
                        <Circle color="#7FC008"></Circle>
                        <LegendText>Criados - {count(PlansData, 1)}%</LegendText>
                        <Circle color="#DB8C28"></Circle>
                        <LegendText>Finalizados - {count(PlansData, 0)}%</LegendText>
                        <Circle color="#EB5757"></Circle>
                        <LegendText>Em aberto - {count(PlansData, -1)}%</LegendText>
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
                                <LegendText>{mean(PlansData)} min</LegendText>
                                <LegendText>{mean(PlansData)} min</LegendText>
                                <LegendText>{mean(PlansData)} min</LegendText>
                            </div>
                        </div>
                    </LegendBoxMean>
                </div>
            </ContentArea>
        </>
    );
}

export default Circular2;