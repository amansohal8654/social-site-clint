import React, {useContext} from 'react'
import './Login.scss'
import {useMutation} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import {useForm} from '../util/hooks'
import { useToasts } from 'react-toast-notifications'
import {AuthContext} from '../context/auth'

function Register(props) {
    const context = useContext(AuthContext)
    const { addToast } = useToasts()
  
    const {onChange, onSubmit, values} = useForm(registerUser, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })


    const [addUser, { loading }] = useMutation(REGISTER_USER,{
        update(_, {data: {register: userData}}){
            context.login(userData)
            props.history.push('/');
        },
        onError(err){
            Object.keys(err.graphQLErrors[0].extensions.exception.errors).length > 0 && (
                (Object.values(err.graphQLErrors[0].extensions.exception.errors).map((value) => (
                 <div key = {value} >
                     {addToast(value, { appearance: 'error' })}
                 </div>
                )))
                
            )},
        variables: values
    })

  function registerUser() {
      addUser()
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
                    onChange = {onChange}
                />
                <input 
                    placeholder="Email.." 
                    type="email" 
                    name="email" 
                    value={values.email}
                    onChange = {onChange}
                />
                <input 
                    placeholder="Password" 
                    type="password" 
                    name="password" 
                    value={values.password}
                    onChange = {onChange}
                />
                <input 
                    placeholder="Confirm Password" 
                    type="password" 
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={onChange}
                />
                <button type="submit">Sign Up</button>
            </form>

            )
            }
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
