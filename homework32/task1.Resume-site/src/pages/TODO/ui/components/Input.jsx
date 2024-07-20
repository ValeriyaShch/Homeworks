import {Formik, Form, Field} from "formik";
import {basicSchema} from "../../schemas/index.js";
import {useDispatch, useSelector} from "react-redux";
import {todoActions} from "../../../../shared/core/saga/actionTypes.js";
import selectors from "../../../../shared/core/redux/Selectors/todoSelectors.js";
import {Button, TextField, Paper, Box, Card, IconButton} from "@mui/material";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const Input = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectors.isLoading);

    const sendForm = (formData) => {
        dispatch(todoActions.addTodo({
            id: Math.random(),
            isEditing: false,
            text: formData.text,
            isDone: false
        }))
    }

    return (<Formik
            initialValues={{text: ""}}
            onSubmit={(values, formikBag) => {
                sendForm(values);
                formikBag.resetForm();
            }}
            validationSchema={basicSchema}
        >
            {({errors, touched}) => {
                return (<Form className="form">
                <div className="flex">
                    <Paper elevation={6} sx={{display: 'flex', alignItems: 'center', border: '1px solid grey'}}>
                        <Field as={TextField} name="text" sx={{flexGrow: 1}}   />
                        <IconButton sx={{ p: '10px'}} disabled={isLoading} type="submit" >
                            <PlaylistAddIcon />
                        </IconButton>
                    </Paper>
                </div>
                {errors.text && touched.text ? (<p className="error">{errors.text}</p>) : ""}
            </Form>)}}
        </Formik>

    );
};

export default Input;