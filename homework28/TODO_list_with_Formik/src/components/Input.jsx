import {Formik, Form, Field} from "formik";
import {basicSchema} from "../schemas/index.js"

const Input = (props ) => {

    const sendForm = (formData) => {
        props.onSubmit(formData.text)
    }

    return (
        <Formik
            initialValues={{text:""}}
            onSubmit={sendForm}
            validationSchema={basicSchema}
        >
            {({errors, touched}) => (
                <Form className="form">
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
                </Form>
            )}

        </Formik>

    );
};

export default Input;