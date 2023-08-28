import React from "react";
import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <>
            <div className="containerBody">
                <section className="containerContent80">
                    <h2 className="">SÅDAN HJÆLPER VI DYR</h2>
                    <p>
                        Dyrenes Beskyttelse har en lang og stolt tradition som
                        forkæmper for det gode dyreliv og hjælp til nødstedte og
                        vanrøgtede dyr. Vores mission er at hjælpe dyr i nød,
                        stoppe overgreb mod dyr og kæmpe for et respektfuldt og
                        bæredygtigt forhold mellem dyr, mennesker og natur. Mens
                        vi forbedrer forholdene for dyr gennem politisk
                        interessevaretagelse og vidensformidling, så yder vi
                        hjælp til dyrene her og nu gennem dyreredning, pleje og
                        formidling af dyr.
                    </p>
                    <div className="marginTB">
                        <p>
                            Er du frivillig eller medarbejder kan du logge ind
                            her
                        </p>
                        <Form method="post">
                            <div className="">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="mail"
                                    required
                                    />
                                <input
                                    type="text"
                                    placeholder="Password"
                                    name="password"
                                    required
                                    />
                            </div>
                            <input type="submit" value="Log Ind" />
                                    </Form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default LogIn;
