import React, { useState } from "react";
import './buttonlayout.css';
import Measurement from "./Inputs/measure";
import Location from "./Inputs/location";
import Parameter from "./Inputs/Parameters";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

export default function Inputs() {

    return (
        <>
            <div className="buttonlayout">
                <section>
                    <a href="/location">
                        <button>LOCATION</button>
                    </a>
                    <a href="/parameter">
                        <button>PARAMETERS</button>
                    </a>
                    <a href="/measurement">
                        <button>MEASUREMENT</button>
                    </a>
                    <a href="/quality">
                        <button>QUALITY</button>
                    </a>
                    <a href="/sampling">
                        <button>SAMPLING POINT</button>
                    </a>
                </section>
            </div>
            <div>
                <Location></Location>
                <Parameter></Parameter>
            </div>
        </>
    )
}