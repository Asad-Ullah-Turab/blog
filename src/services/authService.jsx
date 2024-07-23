import { Client, Account, ID } from "appwrite";
import appwriteConfig from "../config";

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
      const user = await this.account
        .createEmailPasswordSession(email, password)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      if (user) return user;
      else return null;
    } catch (e) {
      console.log("Error in authServive :: login: ", e);
    }
  }

  async logout() {
    // Remove the user from the session
    try {
      const result = await this.account.deleteSession("current");
      return result;
    } catch (e) {
      console.log("Error in authServive :: logout: ", e);
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
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in authServive :: register: ", e);
    }
  }

  async getCurrentUser() {
    // Get the user from the session
    try {
      const result = await this.account.getSession("current");
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in authServive :: getCurrentUser: ", e);
    }
  }

  changePassword(oldPassword, newPassword, userId) {
    // Change the user's password
    console.log(oldPassword, newPassword, userId);
  }
}

const authService = new AuthService();
export default authService;
