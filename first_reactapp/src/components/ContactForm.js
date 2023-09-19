import React from "react";
import "../styles/contact.css"
import "../styles/layout.css"
import { Formik, Form } from 'formik';
import CustomInput from "./CustomInput";
import TextAreaInput from "./FormTextarea"
import {formSchema} from "../Schemas/indexSchema.js"

 
function ContactForm() {

    const onSubmit = async(values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        };

        

    
    return(
        <>
        <div className="contact-form-container">
        <h2>Contact Us</h2>
        <p>Thanks for contacting us. We'll get back to you as soon as possible.</p>
        <Formik
       initialValues={{ firstName: "", lastName: "", email: "", enquiry: "" }}
       validationSchema={formSchema}
       onSubmit={onSubmit}
     >
       {({isSubmitting}) => (
         <Form>
         <CustomInput
            label="FirstName"
            name="firstName"
            id="firstname"
            type="text"
            placeholder="Input First Name"
         />
         <CustomInput
            label="LastName"
            name="lastName"
            id="lastname"
            type="text"
            placeholder="Input Last Name"
        />
        <CustomInput
            label="Email"
            name="email"
            id="email"
            type="text"
            placeholder="Input Email"
        />
        <TextAreaInput
            className="enquiry-field"
            label="Enquiry"
            name="enquiry"
            id="enquiry"
            type="text"
            placeholder="Input enquiry"
        />
        <button 
        className="submit-button"
        // disabled={isSubmitting}
        type="submit">Submit</button>
        </Form>
       )}

     </Formik>
    </div>
    </>
    );
}



export default ContactForm;