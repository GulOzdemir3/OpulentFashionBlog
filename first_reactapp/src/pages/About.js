import Layout from "../components/Layout";
import outfitFour from "../images/outfitFour.png"
import "../styles/about.css"

function About() {
    return(
        <div>
        <Layout>
        <div className="upper-section">
        <h1 className="upper-section-header">About Opulent Fashion</h1>
            <p className="upper-section-text"> Fashion Economics: <br>
                </br> Analyzing the Price Dynamics <br>
                </br> of Luxury Brands </p>
        </div>
            <div className="image-container">
            <div className="text-container">
            <p className="side-text">
            Welcome to our fashion blog! Here, we delve into the captivating world of luxury fashion houses, exploring their rich heritage
            and the captivating stories behind their creations. Discover the fascinating journey of fashion icons and gain insights into their iconic designs and visionary concepts.
            <br/><br/>
            Our blog goes beyond aesthetics. We also provide valuable information about the price history of coveted fashion pieces.
            Whether you're considering investing in a timeless garment or searching for that perfect statement piece,
            we offer expert advice to help you make informed decisions. Stay ahead of the fashion curve and unlock a world of sartorial inspiration.
            </p>
            </div>
            <img
            className="side-image"
            src={outfitFour}
            alt="outfit"
            />
            </div>
        </Layout>
        </div>
    )
}

export default About;