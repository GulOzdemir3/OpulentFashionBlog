import { useField } from "formik";
import "../styles/contact.css"

const TextAreaInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log("field", field)
    console.log("meta", meta)
    return (
        <>
        <div className="textArea-fields">
            <label htmlFor={props.id}>{label}</label>
            <textarea 
            {...field} 
            {...props}
            className={meta.touched && meta.error ? "input-error" : ""} 
            />
            </div>
            {meta.touched && meta.error && <div className="error">{meta.error} </div>}
        </>
    );
};

export default TextAreaInput;