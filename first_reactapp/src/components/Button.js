import Contact from "../pages/Contact";

function  Btn() {
    const clickHandler = () => {
        console.log("Clicked")
    }
    return(
        <button onClick={clickHandler}>Submit</button>
    )
}

export default Btn;