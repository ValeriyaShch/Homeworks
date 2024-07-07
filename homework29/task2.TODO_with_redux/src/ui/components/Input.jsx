import {Formik, Form, Field} from "formik";
import {basicSchema} from "../schemas/index.js";
import {useDispatch} from "react-redux";
import todoSlice from "../../core/slice/todoSlice.js";

const Input = (props) => {
    const dispatch = useDispatch();

    const sendForm = (formData) => {
        dispatch(todoSlice.actions.addItem({id: Math.random(), text: formData.text}))

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
                        <button type="submit" className="form__btn">
                            Додати
                        </button>
                    </div>
                    {errors.text && touched.text ? (<p className="error">{errors.text}</p>) : ""}
                </Form>)}
        </Formik>

    );
};

export default Input;