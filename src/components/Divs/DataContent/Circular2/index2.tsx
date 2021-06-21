import React, {useContext} from 'react'
import AppContext from '../../../../context/Context'
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

const Circular3: React.FC = () => {
    const { PlansData } = useContext(AppContext)
    return (
        <div 
            style = {{
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
    );
}

export default Circular3;