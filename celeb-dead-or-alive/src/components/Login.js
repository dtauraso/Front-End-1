import React, { useState, useEffect } from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup";
import axios from "axios";


// stuff for formik to use
const MyForm = ( {values, errors, touched, status, handleChange } ) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        if(status) {
            setUsers([...users, status])
        }
    }, [status])

    return (

        <div className="userForm">


            <Form>
                <Field
                    type="text"
                    name="username"
                    placeholder="username"/>
                {/* if the user clicked into the name field, made an error when filling it out
                print out an error message */}
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}

                <Field
                    type="text"
                    name="password"
                    placeholder="password"/>
                {
                    touched.password && errors.password && (
                        <p className="error">{errors.password}</p>
                    )
                }
                <button>Submit</button>
            </Form>
            {users.map(user => (
               <ul key={user.id}>
                <li>Username: {user.username}</li>
                <li>Password: {users.password}</li>

               </ul>
                
            ))}
        </div>
    )
}

const FormikUserForm = withFormik({
    // user filling out form
    mapPropsToValues({username, password}) {
        // holding the state of the form
        // each filed can have a default "0" value or whatever the user types in

        return {
            username: username || "",
            password: password || ""

        };
    },
    // validating what the user typed in
    validationSchema: Yup.object().shape({
        username: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too Long!')
        .required('a username is required'),
        password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required("a password is required")
    }),
    // send the user data to the server
    // same values as above
    handleSubmit(values, { setStatus, resetForm }) {
        console.log(values)
        axios   .post("https://reqres.in/api/users/", values)
                .then(res => {
                    console.log("received", res.data)
                    setStatus(res.data)
                    resetForm({})
                })
                .catch(err => console.log(err.response));
    }

})(MyForm);
export default FormikUserForm;
console.log("This is the HOC", FormikUserForm);