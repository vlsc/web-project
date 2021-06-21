import React, { useContext } from 'react'
import { ListDiv, Table } from './Styles';
import AppContext from '../../../../context/Context';

interface insp{
    nome: String,
    planejado: number,
    realizado: number,
    dataAtt: String
}

const List: React.FC = () => {
    const { InspData } = useContext(AppContext);
    return(
        <ListDiv>
            <Table>
                <tr className="label">
                    <th className="Name">
                        Nome
                    </th>
                    <th>
                        Planejado
                    </th>
                    <th>
                        Realizado
                    </th>
                    <th>
                        Ultima atualização
                    </th>
                </tr>
                {
                    InspData.map((item: insp)=>{
                        return (
                           <tr className="Data">
                                <td className="Name">
                                    {item.nome}
                                </td>
                                <td>
                                    {item.planejado<0?'-':item.planejado}
                                </td>
                                <td>
                                    {item.realizado<0?'-':item.realizado}
                                </td>
                                <td>
                                    {item.dataAtt}
                                </td>
                            </tr> 
                        );
                    })
                }  
            </Table>
        </ListDiv>  
    );
}

export default List;