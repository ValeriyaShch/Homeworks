import {useItem} from "./useItem.js";
import {
    Button,
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Paper,
    TextField, Box
} from "@mui/material";
import {Field} from "formik";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd.js";

function TaskItem({task}) {
    const {
        onDeleteTask,
        isLoading,
        onToggleTask,
        onEditTask,
        onUpdateTask,
        inputValue,
        onChangeInput
    } = useItem(task.id, task.text, task.isDone);
    return (
        <Paper elevation={1} sx={{border: '1px solid grey'}}>

        <ListItem sx={{display: 'flex', gap: '15px', alignItems: 'center'}}  >
            <ListItemButton dense sx={{maxWidth:'50px'}}>
                <ListItemIcon >
                    <Checkbox
                        edge="start"
                        name="done"
                        checked={task.isDone}
                        tabIndex={-1}
                        disableRipple
                        className="js--checkbox"
                        onChange={onToggleTask}
                    />
                </ListItemIcon>
            </ListItemButton>
            {task.isEditing
                ? (
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center', gap: '15px', flexGrow: 1}}>
                        <TextField sx={{ flexGrow: 1}} onInput={onChangeInput} defaultValue={inputValue}/>
                        <Button
                            onClick={onUpdateTask}
                            disabled={isLoading}
                            variant='contained'
                        >
                            Зберегти
                        </Button>
                    </Box>

                ) : (
                    <Box sx={{display: 'flex', justifyContent: 'space-between', flexGrow: 1}}>
                        <ListItemText className="todo-item__description" primary={task.text}/>
                        <Button
                            onClick={() => onEditTask(task.id)}
                            disabled={isLoading}
                            variant='contained'
                        >
                            Змінити
                        </Button>
                    </Box>

                )}
            <Button
                onClick={onDeleteTask}
                className="todo-item__button"
                disabled={isLoading}
                variant='contained'
            >
                Видалити
            </Button>

        </ListItem>
        </Paper>
    );
}

export default TaskItem;