import { Client, Account, ID } from "appwrite";
import appwriteConfig from "../config/config";
import profileService from "./profileService";

class AuthService {
    client;
    account;

    constructor() {
        this.client = new Client()
            .setEndpoint(appwriteConfig.endpoint)
            .setProject(appwriteConfig.projectId);

        this.account = new Account(this.client);
    }

    async login({ email, password }) {
        // Get the user from the database
        // If the user exists, return the user
        // Otherwise, return null
        try {
            const session = await this.account.createEmailPasswordSession(
                email,
                password
            );
            if (session) return session;
            else return false;
        } catch (e) {
            console.log("Error in authServive :: login: ", e);
            return false;
        }
    }

    async logout() {
        // Remove the user from the session
        try {
            const result = await this.account.deleteSession("current");
            return result;
        } catch (e) {
            console.log("Error in authServive :: logout: ", e);
            return false;
        }
    }

    async register({ email, password, name }) {
        // Register the user in the database
        try {
            const result = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (result) {
                const session = await this.login({ email, password });
                if (!session) throw new Error("Error in log in of new user");
                const profileResult = await profileService.createProfile({
                    userId: result.$id,
                });
                if (profileResult) return profileResult;
                else throw new Error("Error in creating profile");
            } else {
                throw new Error("Error in creating user");
            }
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async getCurrentUser() {
        // Get the user from the session
        try {
            const result = await this.account.get("current");
            if (result) return result;
            else return false;
        } catch (e) {
            console.log("authService :: getCurrentUser :: User not logged In");
            return false;
        }
    }

    changePassword(oldPassword, newPassword, userId) {
        // Change the user's password
        console.log(oldPassword, newPassword, userId);
    }
}

const authService = new AuthService();
export default authService;
