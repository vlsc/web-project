import React, {useContext} from 'react'
import AppContext from '../../../../context/Context'
import { Bar } from 'react-chartjs-2'

interface datasetsList{
    label: any,
    data: any,
    backgroundColor: any
}

const trata = (data: any) => {
    var dataList = []
    var labels = String
    var allData: datasetsList[] = []

    for(var i = 0; i< data[0].length; i++){
        for(var j = 0; j<data.length;j++){
            dataList.push(data[j][i].duration)
        }
        labels = data[j-1][i].name
        var dataObj = {
            label: labels,
            data: dataList,
            backgroundColor: labels
        }
        allData.push(dataObj)
        dataList = []
    }
   return allData;
}

const makeLabel = (data: any) => {
    var label = []
    for(let i = 0; i < data.length; i++){
        label.push(i+1)
    }
    return label
}

const Barras: React.FC = () =>{
    const { HistData } = useContext(AppContext)
    return (
        <div 
            style={{
                width:'90%', 
                height: '90%', 
                alignSelf:'center', 
                margin: 'auto'
            }}
        >
            <Bar
                type='bar'
                width={600}
                height={400}
                options={{
                    maintainAspectRatio: false,
                }}
                data={{
                    labels: makeLabel(HistData),
                    datasets: trata(HistData)
                }}
            /> 
        </div>
    );
}

export default Barras