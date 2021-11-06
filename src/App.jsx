import React from "react";
import Form from "./Form";

const App = () => {
    return (
        <>
            <div id="main">
                <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
                <div id="main1">
                    <div id="mainleft">
                        <div id="mainlefttop">
                            <h1>Computer Society Of India</h1>
                            <h2>(Student Chapter)</h2>
                        </div>
                        {/* <div id="mainlefttop">
                            <img src="../image/csilogo.svg" alt="" id="logo" />
                            <h1 id="heading">CINE'2021</h1>
                        </div>*/}
                        <div id="mainleftbottom">
                            <img src="../image/centerlogo1.png" alt="centerlogo" id="centerlogo" />
                        </div>

                    </div>
                    <div id="mainright">
                        <div id="formm">
                            <h1 id="registermain"><span id="registermain1"><img src="../image/backg.png" alt="csilogo" id="registermain2" /></span>Register Now</h1>
                            <Form />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default App;