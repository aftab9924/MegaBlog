import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
        
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){

        try {
            const userAccount =  await this.account.create(ID.unique(),email, password,name)
            if (userAccount) {
                
                return this.logIn({email, password})
            }
            else {
                return userAccount;
            }
        } catch (error) {
            console.log("AppWrite service :: createAccount :: error",error)
        }
    }

    async logIn({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("AppWrite service :: logIn :: error",error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("AppWrite service :: getcurrentUser :: error",error)
        }

        return null;
    }

    async logOut(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("AppWrite service :: logOut :: error",error)
        }
    }
}

const authService = new AuthService();

export default authService