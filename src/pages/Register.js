import React, {useState} from 'react'
import './Login.scss'
import {useMutation} from '@apollo/react-hooks'
import gql from 'graphql-tag'
function Register() {
    const[errors, setErrors] = useState({})
    const [values, setValues] =  useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value})
        console.log(event.value, event.name)
    }

    const [addUser, { loading }] = useMutation(REGISTER_USER,{
        update(proxy, result){
            console.log(result)
        },
        onError(err){
            console.log(err.graphQLErrors[0].extensions.exception.errors)
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: values
    })

    const onSubmit = (event) => {
        event.preventDefault();
        addUser();
    }

  
    return (
        <div>
            <div className="form animated flipInX">
            <h2>Sign Up Your New Account</h2>
            {loading ? 
            (<h1>loading</h1>):
            (
                <form className="loginbox" autoComplete="off" onSubmit={onSubmit}>
                <input 
                    placeholder="Username" 
                    type="text" 
                    name="username" 
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange = {onChange}
                />
                <input 
                    placeholder="Email.." 
                    type="email" 
                    name="email" 
                    value={values.email}
                    onChange = {onChange}
                    error={errors.email ? true : false}
                />
                <input 
                    placeholder="Password" 
                    type="password" 
                    name="password" 
                    value={values.password}
                    onChange = {onChange}
                    error={errors.password ? true : false}
                />
                <input 
                    placeholder="Confirm Password" 
                    type="password" 
                    name="confirmPassword"
                    value={values.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                    onChange={onChange}
                />
                <button type="submit">Sign Up</button>
            </form>

            )
            }
           {Object.keys(errors).length > 0 && (
               (Object.values(errors).map((value) => (
                <h1 key = {value} >
                    {value}
                </h1>
               )))
               
           )}
        </div>
        </div>
    )
}

const REGISTER_USER = gql`
mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
) {
   register (
       registerInput: {
            username: $username
            email: $email
            password: $password
            confirmPassword: $confirmPassword
        }
    ){
        id email username createdAt token
    }
}
`
export default Register
