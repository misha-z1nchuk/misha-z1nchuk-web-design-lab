import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (firstName, lastName, email, password) => {
    try{
        const {data} = await $host.post('api/users/sign-up', {firstName, lastName ,email, password})
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    }catch (e){
        alert(e.response.data.error)
    }

}

export const login = async (email, password) => {
    const {data} = await $host.post('api/users/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/users/auth' )
    localStorage.setItem('token', data.token)
    return {
        decoded_token: jwt_decode(data.token),
        user: data.user,
    }
}