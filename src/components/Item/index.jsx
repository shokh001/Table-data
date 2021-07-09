import React, { useState } from "react";
import {Button, Div, Table} from '../Table/style'
import {Input, Checkbox, UnUpload, DivWrap, PencilIcon} from './styled'

export default ({value, dispatch}) => {
    const [edit, setEdit] = useState(false); 
    const [email, setEmail] = useState(value.email); 
    
    const onEdit = () => {
        setEdit(true);        
    }

    const onClose = () => {
        setEmail(value.email);        
        setEdit(false);        
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);       
    }

    const onSave = () => { 
        email && dispatch({type: 'edit', payload:{id:value.id, email: email}})   
        setEdit(false);
    }

    return (
            <Table.TR>
                <Table.TD align='center'> <input type="checkbox" /> </Table.TD>
                <Table.TD>{value.name}</Table.TD>
                <Table.TD>                                
                        <Div>
                            <Input edit={edit} onChange={onEmailChange} type='text' value={email} />

                            {
                                edit?
                                    <DivWrap>
                                        <Checkbox onClick={onSave} />
                                        <UnUpload onClick={onClose} />                                    
                                    </DivWrap> :  <PencilIcon onClick={onEdit} /> 
                            }
                        </Div>                                    
                </Table.TD>
                <Table.TD>{value.date}</Table.TD>
                <Table.TD>{value.status}</Table.TD>
                <Table.TD>
                    <Div>
                        <Button onClick={()=>dispatch({type: 'delete', payload:{id:value.id}})}>Delete</Button>
                    </Div>                         
                </Table.TD>
            </Table.TR>                          
    );
}
 