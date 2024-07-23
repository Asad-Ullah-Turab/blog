import { Client, Account, ID } from "appwrite";
import appwriteConfig from "../config";

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

const account = new Account(client);

class AuthService {
  async login(email, password) {
    // Get the user from the database
    // If the user exists, return the user
    // Otherwise, return null
    try {
      const session = await account
        .createEmailPasswordSession(email, password)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      console.log(session);
      return session;
    } catch (e) {
      console.log("Error in src/services/authService.jsx: ", e);
    }
  }

  async logout() {
    // Remove the user from the session
    try {
      const result = await account.deleteSession("current");
      return result;
    } catch (e) {
      console.log("Error in src/services/authService.jsx: ", e);
    }
  }

  async register({ email, password, name }) {
    // Register the user in the database
    try {
      const result = await account.create(ID.unique(), email, password, name);
      return result;
    } catch (e) {
      console.log("Error in src/services/authService.jsx: ", e);
    }
  }

  async getCurrentUser() {
    // Get the user from the session
    try {
      const result = await account.getSession("current");
      return result;
    } catch (e) {
      console.log("Error in src/services/authService.jsx: ", e);
    }
  }

  changePassword(oldPassword, newPassword, userId) {
    // Change the user's password
  }
}
