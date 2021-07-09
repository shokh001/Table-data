import styled from "styled-components";
import { ReactComponent as pencil } from "../../assets/pencil.svg";
import { ReactComponent as checkbox } from "../../assets/checkbox.svg";
import { ReactComponent as unUpload } from "../../assets/unUpload.svg";


export const PencilIcon = styled(pencil)`
width: 18px;
cursor: pointer;
`

export const Checkbox = styled(checkbox)`
width: 18px;
cursor: pointer;
margin-right: 30px;
& path {
    fill: green
}
`

export const UnUpload = styled(unUpload)`
width: 18px;
cursor: pointer;
& path {
    fill: red
}
`

export const Input = styled.input`
border: ${({edit}) => !edit && "none"};
border-color: var(--link-color);
border-radius: 8px;
outline: none;
padding: 6px 0 6px 10px;
background-color: ${({edit}) => !edit? "transparent" : "white"};
width: 60%;

:focus{
    background-color: #fff;
}
`

export const Label = styled.label`

`


export const DivWrap = styled.div`
display: inline;
`
