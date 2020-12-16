import React, { useContext} from 'react'
import './Login.scss'
import {useMutation} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import {AuthContext} from '../context/auth'
import {useForm} from '../util/hooks'
import { useToasts } from 'react-toast-notifications'

function Login(props) {
    const context =useContext(AuthContext)
    const { addToast } = useToasts()

    const {onChange, onSubmit, values} = useForm(loginUserCallback,{
        username: "",
        password: ""
    })
debugger
    const [loginUser, { loading }] = useMutation(LOGIN_USER,{
        update(_, {data: {login: userData}}){
            context.login(userData)
            props.history.push('/');
        },
        onError(err){

            err.graphQLErrors[0].extensions.exception.errors ? Object.keys(err.graphQLErrors[0].extensions.exception.errors).length > 0 && (
                (Object.values(err.graphQLErrors[0].extensions.exception.errors).map((value) => (
                 <div key = {value} >
                     {addToast(value, { appearance: 'error' })}
                 </div>
                ))) 
            ) : 
            addToast(err.graphQLErrors[0].message, { appearance: 'error' })},
            
        variables: values
    })

    function loginUserCallback(){
        loginUser()
    }

  
    return (
        <div>
            <div className="form animated flipInX">
            <h2>Login</h2>
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
                    placeholder="Password" 
                    type="password" 
                    name="password" 
                    value={values.password}
                    onChange = {onChange}
                />
                <button type="submit" >Login</button>
                
            </form>

            )
            }
        </div>
        </div>
    )
}

const LOGIN_USER = gql`
mutation login(
    $username: String!
    $password: String!
) {
    login (username: $username, password: $password){
        id email username createdAt token
    }
}
`
export default Login
