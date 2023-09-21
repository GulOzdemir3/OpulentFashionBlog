import React, { useEffect, useState, useRef } from "react";
import chanelFlap2 from "../images/chanelFlap2.jpeg"
import birkin35Togo from "../images/birkin35Togo.jpeg"
import Layout from "../components/Layout";
import "../styles/charts.css"
import Plot from "react-plotly.js";
import axios from "axios";


// const dummyData = {
//     X: [2005, 2008, 2009, 2010, 2011],
//     y: [1000, 1500, 1200, 1800, 2200],
//   };

function Charts() {

    const chanelChartRef = useRef(null)
    const birkinChartRef = useRef(null)
    
    const [ chanelData, setChanelData ] = useState({X: [], y: [] });
    const [ birkinData, setBirkinData ] = useState({ X: [], y: [] });

    //   const [data, setData] = useState(dummyData);


    useEffect(() => {
        axios.get("http://localhost:8080/api/data") 
        .then(response => {
            const [chanelChartData, togoChartData] = response.data.map(chart => JSON.parse(chart));
            setChanelData(chanelChartData);
            setBirkinData(togoChartData);
        //  setData(response.data);
        })
        .catch(error => {
            console.error(error);
    });
}, []);

// console.log("Current Data State:", data);
    console.log("Chanel Data:", chanelData);
    console.log("Birkin Data:", birkinData);
    return(
        <>
        <Layout>
        <h1>Charts</h1>
        <p></p>
                <div className="chart-container">
                    <div className="chanel-container">
                    <div className="chartCaption">
                    <div ref={chanelChartRef}>
                    
                        <Plot
                        data={[
                            {
                            x: chanelData.X,
                            y: chanelData.y,
                            type: "scatter",
                            mode: "lines+markers",
                            marker: { color: "black" },
                            name: "Actual Data"
                            },
                        ]}
                        layout= {{
                            title: "Chanel Medium Flap Bag",
                            xaxis: { title: "Year" },
                            yaxis: { title: "Price ($)" },
                            width: 500,
                            height: 400,
                        }}
                        />

                                <p className="chanel-caption">This chart shows the price progression from the years 2005-2023,<br></br>
                                    according to the given data, the medium classic flaps will be $11,220 in 2024</p>
                            </div>
                            </div>
                            
                                <img
                                    className="chanelBagImage"
                                    src={chanelFlap2}
                                    alt="MediumFlapBagImage"
                                    style={{
                                        width: "350px",
                                        height: "400px"
                                    }}
                                />
                    </div>

                    <div className="birkin-container">
                    <div className="chartCaption">
                    <div ref={birkinChartRef}>
                        <Plot
                            data={[
                                {
                                x: birkinData.X,
                                y: birkinData.y,
                                type: "scatter",
                                mode: "lines+markers",
                                marker: { color: "black" },
                                name: "Actual Data"
                                },
                            ]}
                            layout= {{
                                title: "Birkin Togo 35",
                                xaxis: { title: "Year" },
                                yaxis: { title: "Price ($)" },
                                width: 500,
                                height: 400,
                            }}
                            />
                            <p className="togo-caption">This chart shows the price progression from the years 1980-2023,<br></br>
                                according to the given data, the Birkin Togo 35 will be $13,104 in 2024</p>
                                </div>
                                </div>
                            <img
                                className="birkin-35Togo"
                                src={birkin35Togo}
                                alt="BirkinTgo35"
                                style={{
                                    width: "350px",
                                    height: "400px"
                                }}
                            />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Charts;