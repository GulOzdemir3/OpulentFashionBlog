import React from "react";
import Layout from "../components/Layout";
import "../styles/homepage.css"
// import outfitOne from "../images/outfitOne.jpeg"
import outfitTwo from "../images/outfitTwo.png"
import photMe from "../images/photMe.png"



function Homepage() {
    return(
        <div className="grid-container">
            <Layout>
            <div className="main-content">
                <div className="image-container">
                <img
                        className="left-image"
                        src={photMe} 
                        alt="outfitOne"
                        style={{
                                width: "400px",
                                height: "auto",
                                marginRight: "10px",
                            }}
                />
                
                <img
                    className="right-image"
                    src={outfitTwo}
                    alt="outfitTwo"
                    style={{
                                width: "400px",
                                height: "auto",
                                marginRight: "10px",
                                }}
                    />
                </div>

                </div>
            </Layout>
        </div>
    )
}

export default Homepage;