import React, { useState, useEffect, useContext, useReducer } from "react";
import { Container, Table, Select, SortName} from './style'
import Item from "../Item";
import { TableContext } from '../../context'

export default () => {
    
    const reducer = (state, action) => {
        switch (action.type) {         
            case 'delete':
                return state.filter((value) => value.id !== action.payload.id)
            case 'sort':
                return state.sort((a, b) => (a.name>b.name)? 1: ((b.name>a.name)? -1: 0))
            case 'select':
                return state.filter((value) => value.status === action.payload.event.target.value || action.payload.event.target.value === 'all');
            case 'edit':
                return state.filter((value) => (value.id === action.payload.id)? (value.email=action.payload.email) : (value.email=value.email));
            default: return state
                }
            }
            
    const [sortDown, setSortDown] = useState(true);
    const [data, setData] = useContext(TableContext); 
    const [data2, dispatch] = useReducer(reducer, data)            
        
    const onNameSort = () => {
        dispatch({type:"sort"});
        setSortDown(!sortDown)
    } 

    useEffect(()=>{
        setData(data)
        setSortDown(!sortDown)
    }, [setSortDown])  

    return (
        <Container>
            <Table>
                <Table.Head>
                    <Table.TR white>
                        <Table.TH checkbox align='center'> <input type="checkbox" /> </Table.TH>
                        <Table.TH align='left'>Name</Table.TH>
                        <Table.TH align='left'>Email</Table.TH>
                        <Table.TH align='left'>Date</Table.TH>
                        <Table.TH align='left'>
                            <Select onChange={(e) => dispatch({type: "select", payload: {event:e}})}>
                                <option value="all">Select</option>
                                <option value="asistant">Asistant</option>
                                <option value="mentor">Mentor</option>
                                <option value="student">Student</option>
                            </Select>
                        </Table.TH>
                        <Table.TH align='left'>Action <SortName onClick={onNameSort}>Sort</SortName>
                        </Table.TH>
                    </Table.TR>
                </Table.Head>            

                <Table.Body>
                    {
                        data2.map((value) => {                        
                            return <Item 
                            key={value.id} 
                            dispatch={dispatch}
                            value = {value}  />
                        })
                    }
                </Table.Body>
            </Table>
        </Container>
    );
}
 