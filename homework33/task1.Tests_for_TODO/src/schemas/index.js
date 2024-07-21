import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    text: yup.string().required("Це обов'язкове поле").min(5, "Повинно бути не менше 5 символів")
})

