import { useField } from "formik";
import "../styles/contact.css"

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log("field", field)
    console.log("meta", meta)
    return (
        <>
        <div className="form-fields">
            <label htmlFor={props.id}>{label}</label>
            <input 
            {...field} 
            {...props}
            className={meta.touched && meta.error ? "input-error" : ""} 
            />
            </div>
            {meta.touched && meta.error && <div className="error">{meta.error} </div>}
        </>
    );
};

export default CustomInput;