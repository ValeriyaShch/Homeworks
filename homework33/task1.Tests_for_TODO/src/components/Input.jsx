import {Formik, Form, Field} from "formik";
import {basicSchema} from "../schemas/index.js";
import {useDispatch, useSelector} from "react-redux";
import {todoActions} from "../core/saga/actionTypes.js";
import selectors from "../core/selectors.js";

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
            {({errors, touched}) => (<Form className="form">
                <div className="flex">
                    <Field
                        type="text"
                        name="text"
                        className="form__input"
                    />
                    <button disabled={isLoading} type="submit" className="form__btn">
                        Додати
                    </button>
                </div>
                {errors.text && touched.text ? (<p className="error">{errors.text}</p>) : ""}
            </Form>)}
        </Formik>

    );
};

export default Input;