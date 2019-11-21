
import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import styled from "styled-components"

const StyledForm = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: darkgreen;
`;
const StyledEntry = styled.label`
    color: white;
`;
const StyledResults = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;


const NewUser = ({ values, errors, touched, status }) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [status]);
   

    return (
        <div>

            <Form class='FormMASTER'>
                <StyledForm class='Form'>
                    <div>
                        <StyledEntry>Username<Field type="text" username="username" placeholder="Username" /></StyledEntry>
                        {touched.username && errors.username && (<p className="error">{errors.username}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Password<Field type="password" name="password" placeholder="●●●●●●●●" /></StyledEntry>
                        {touched.password && errors.password && (<p className="error">{errors.password}</p>)}
                    </div>
                    {touched.terms && errors.terms && (<p className="error">{errors.terms}</p>)}
                    <button>Submit</button>
                </StyledForm>
            </Form>
            {/* Prints user info after submission */}
            {user.map(person => (
                <ul key={person.id}>
                    <li>Username: {person.username}</li>
                    <li>Password: {"*".repeat(person.password.length)}</li>
                </ul>
            ))}
        </div>

    )
}
const FormikNewUser = withFormik({
    mapPropsToValues({ username, password, }) {
        return {
            username: username || "",
            password: password || "",
        };
    },


    validationSchema: Yup.object().shape({
        username: Yup.string().min(2, "Username must have more than one character.").required("Required field."),
        password: Yup.string().min(6, "Password must have at least 6 characters.").required("Required field."),
    }),

    handleSubmit(values, { setStatus }) {
        axios
            .post("https://celebritydeadoralive-backend.herokuapp.com/api/users", values)
            .then(response => {
                console.log(response);
                setStatus(response.data);
            })
            .catch(error => console.log(error.response));
    }
})(NewUser)




export default FormikNewUser