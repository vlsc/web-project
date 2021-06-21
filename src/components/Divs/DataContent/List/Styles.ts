import styled from "styled-components";

export const ListDiv = styled.div`
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
`;

export const Table = styled.table`
    tr.label{
        th{
            font-size: 0.6rem;
            font-weight: bold;
            
        }
        th.Name{
            text-align: left;
            width: 65%
        }
    }
    tr.Data{
        td{
            font-size: 10px;
            text-align: center;
            border-bottom: 0.5px solid #EBEBEB;
        }
        td.Name{
            text-align: left;
            font-weight: bold;
            font-size: 12px;
            line-height: 21px;
        }
    }
`;