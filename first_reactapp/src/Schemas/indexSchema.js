import * as yup from 'yup'


export const formSchema = yup.object().shape({
    firstName: yup.string().min(2, "Name should have at least 2 characters").required("Required"),
    lastName: yup.string("Enter Last name").min(2, "Name should have at least 2 characters").required("Required"),
    email: yup.string().email("Enter valid email").required("Required"),
    enquiry: yup.string("Input enquiry").min(5).required("Required")
})