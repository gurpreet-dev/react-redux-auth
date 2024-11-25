import { Client } from "./Client";
import conf from "../conf";

export class AuthService {

    getToken() {
        if (conf.authTokenKey in localStorage) {
            return 'Bearer ' + localStorage.getItem(conf.authTokenKey);
        } else {
            return null;
        }
    }

    async getCurrentUser() {
        return await Client.get('/user/profile').then((res) => {
            return res;
        }).catch(function (error) {
            throw error;
        });
    }

    async login(params) {

        return await Client.post('/login', params).then((res) => {
            return res;
        }).catch(function (error) {
            throw error;
        });

        // try {
        //     return await Client({
        //         method: 'post',
        //         url: '/login',
        //         data: params
        //     })
        // } catch (error) {
        //     throw error;
        // }

    }

    async logout(params) {
        return await Client.post('/logout').then((res) => {
            return res;
        }).catch(function (error) {
            throw error;
        });
    }

}

const authService = new AuthService();

export default authService;