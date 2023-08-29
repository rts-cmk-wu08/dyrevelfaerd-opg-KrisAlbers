import { Form, json, useNavigate, useLocation } from "react-router-dom";
import { createErrorsObject } from "../helpers/errorhandling";
import { useState } from "react";
// import { FaEye, FaEyeSlash } from 'react-icons/fa'
import * as z from "zod";
import axios from "axios";
import useAuth from "../hooks/useAuth";


const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const HidePass = () => setShowPassword(!showPassword)
  const [errors, setErrors] = useState();
  const auth = useAuth() // { user, logInUser, logOutUser }
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"
  

  const schema = z
    .object({
        username: z.string().min(1, { message: "Password is required!" }),
      password: z.string().min(1, { message: "Password is required!" }),
    })



  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null)
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);

    let validated = schema.safeParse(values)
    console.log(validated) // { success, data, error }

    if (validated.success) {
      // poste data til axios
      let response = await axios.post("http://localhost:4000/api/v1/users", {
        username: validated.data.username,
        password: validated.data.password
      })
      // console.log(response.data)
      auth.logInUser(response.data, () => navigate(from))
    } else {
      setErrors(createErrorsObject(validated.error))
    }


  };
  return (
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
    <Form method="post" onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <div className="formgroup">
        <input type="username" name="username" id="username" placeholder="username" />
        {errors?.username && (<p style={{ color: "red" }}>{errors.username}</p>)}
      </div>
      <div className="formgroup">
        {/* <p style={{ display: "flex", alignItems: "center", gap: "1em", fontSize: "10px", margin: "0", justifyContent: "center" }}>Show password{showPassword ? <FaEye onClick={HidePass} /> : <FaEyeSlash onClick={HidePass} />}</p> */}
        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" autoComplete="false" />
        {errors?.password && (<p style={{ color: "red" }}>{errors.password}</p>)}
      </div>

      <button type="submit" style={{ marginTop: "1rem" }}>Log In</button>

    </Form>
    </div>
                </section>
            </div>
  );
};

export default LogIn;
