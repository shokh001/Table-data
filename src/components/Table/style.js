import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin: 100px;
`

export const Table = styled.table`
border: var(--tborder);
border-collapse: collapse;
width: 100%;
`

Table.Head = styled.thead``

Table.Body = styled.tbody``

Table.TR = styled.tr`
:nth-child(odd) {
    background-color: #f1f1f1;
}
`

Table.TH = styled.th`
border: var(--tborder);
text-align: left;
text-align: ${({align}) => align};
padding: 10px;
width: ${({checkbox}) => checkbox && '40px'}
`

Table.TD = styled.td`
border: var(--tborder);
text-align: ${({align}) => align};
padding: 10px;
`

export const Select = styled.select`
border: none;
outline: none;
width: 100%;
font-size: var(--text-size);
font-weight: 600;
background-color: transparent;
`

export const Button = styled.button`
border: none;
outline: none;
background-color: red;
color: #ffffff;
border-radius: 8px;
padding: 4px 8px;
cursor: pointer;
`

export const Div = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const SortName = styled.span`
color: blue;
`