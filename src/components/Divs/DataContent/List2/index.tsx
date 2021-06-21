import React, { useContext } from 'react'
import { ListDiv, Title, Subtitle, ListItem, ElipseR, ElipseP, ElipseN } from './styles'
import AppContext from '../../../../context/Context'

interface plans{
    plano: number,
    situacao: number,
    responsavel: String,
    data: String,
    hora: String
}

const List2: React.FC = () => {
    const { PlansData } = useContext(AppContext)
    return(
        <ListDiv>
            {PlansData.map((item: plans) => {
                return (
                    <ListItem>
                        <Title>
                            <h3>plano {item.plano}</h3>
                            {item.situacao?
                                item.situacao==1?
                                    <ElipseR>
                                        <h6>REALIZADO</h6>
                                    </ElipseR>
                                :
                                <ElipseN className="naoR">
                                    <h6 className="naoRealizado">NÃO REALIZADO</h6>
                                </ElipseN>
                            :
                            <ElipseP>
                                <h6 className="pendente">PENDENTE</h6>
                            </ElipseP>
                            }
                        </Title>
                        <Subtitle>
                            <h4>responsável: {item.responsavel}</h4>
                            <h4>{item.hora + ' ' + item.data}</h4>
                        </Subtitle>
                    </ListItem> 
                )  
            })
            }
        </ListDiv>
    )
}

export default List2;