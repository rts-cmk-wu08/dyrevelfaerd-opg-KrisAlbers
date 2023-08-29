// import React from "react";
// import { Form } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export const action = async ({ request }) => {
//     let formData = await request.formData();

//     console.log(await formData);
//     let values = Object.fromEntries(await formData);

//     console.log("gffhfhf");
//     console.log(values._action);

// };

const Nyhedsbrev = () => {
    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = "Required";
        }

        if (!values.name) {
            errors.name = "Required";
        } else if (values.name.length < 2) {
            errors.name = "Navn er for kort";
        }
        return errors;
    };
    return (
        <>
            <div className="containerBody bgBlue">
                <section className="containerContent">
                    <h2 className="">Tilmeld vores nyhedsbrev</h2>
                    <div className="flex">
                        <p>
                            Få inspiration og nyheder om dyrevelfærd og vores
                            arbejde, direkte i din indbakke
                        </p>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                            }}
                            validate={validate}
                            onSubmit={(values, { resetForm }) => {
                                // axios.post("http://localhost:4000/statements");
                                console.log(values);
                                resetForm();
                            }}
                        >
                                <Form method="post">
                                    <div className="formgroup">
                                        <Field
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            id="email"
                                        />
                                        <ErrorMessage name="email"/>
                                    </div>

                                    <div className="formgroup">
                                        <Field
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            id="name"
                                        />
                                        <ErrorMessage name="name"/>                                    </div>
                                    <button type="submit">Tilmeld</button>
                                </Form>
                        </Formik>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Nyhedsbrev;
