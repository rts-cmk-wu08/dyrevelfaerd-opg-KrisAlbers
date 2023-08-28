import React from "react";
import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const action = async ({ request }) => {
    let formData = await request.formData();
    
    console.log(await formData);
    let values = Object.fromEntries(await formData);
    
    console.log("gffhfhf");
    console.log(values._action)
  
  
    // if (values._action === "delete") {
    //   // GØR NOGET (SLETTE)
    //   await axios.delete("http://localhost:4000/statements/" + values._id)
  
    //   return null
  
    // } else {
  
    //   let schema = z.object({
    //     sentence: z
    //       .string({ required_error: "Du skal taste noget!" })
    //       .min(1, { message: "Du skal taste noget!" }),
  
    //   });
  
    //   try {
  
    //     let { success, data, error } = schema.safeParse(values); // {success, data, error}
  
    //     if (success) {
    //       await axios.post("http://localhost:4000/statements", data);
  
    //       return null;
    //     } else {
    //       return createErrorsObject(error)
    //     }
  
    //   } catch (error) {
    //     return json({ error });
    //   }
  
    // }
  
  };
  

const Nyhedsbrev = () => {
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
                        <Form method="post">

                            <div>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="mail"
                                    required
                                    />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    required
                                    />
                            </div>
                            <button type="submit">Tilmeld</button>
                            {/* <input type="submit" value="Tilmeld" /> */}
                        
                                    </Form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Nyhedsbrev;
