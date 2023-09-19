import ContactForm from "../components/ContactForm";
import "../styles/contact.css"
import photo11 from "../images/photo11.jpeg"
import Layout from "../components/Layout";


function Contact() {
    return(
        <>
        <Layout>
        <div className="main-container">
        <img className="page-photo"
                src={photo11}
                alt="summerDress"
                height="800px"
                width="600px"
        />
         <div className="form-container">
            <ContactForm />
        </div>


        </div>
        </Layout>
    </>
    )
}

export default Contact;