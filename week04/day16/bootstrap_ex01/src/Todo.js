import { CheckBox } from "@mui/icons-material";
import { InputBase, ListItem, ListItemText } from "@mui/material";

const Todo = ({item})=>{
    return (<ListItem>
        <CheckBox />
        <ListItemText>
            <InputBase value={item.title} />
        </ListItemText>
    </ListItem>);
}

export default Todo;