import { Client, Databases, ID, Query } from "appwrite";
import appwriteConfig from "../config/config";

class ProfileService {
  client;
  databases;
  constructor() {
    this.client = new Client()
      .setEndpoint(appwriteConfig.endpoint)
      .setProject(appwriteConfig.projectId);
    this.databases = new Databases(this.client);
  }

  async createProfile({ userId, bio, profilePic }) {
    try {
      const result = await this.databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.profilesId,
        ID.unique(),
        {
          userId,
          bio,
          profilePic,
        }
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: createProfile: ", e);
    }
  }
  async deleteProfile({ documentId }) {
    try {
      const result = await this.databases.deleteDocument(
        appwriteConfig.databaseId,
        appwriteConfig.profilesId,
        documentId
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: deleteProfile: ", e);
    }
  }
  async getProfile(userId) {
    try {
      const result = await this.databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.profilesId,
        [Query.equal("userId", userId)]
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: getProfile: ", e);
    }
  }
  async updateProfile(documentId, { userId, bio, profilePic }) {
    try {
      const result = await this.databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.profilesId,
        documentId,
        {
          userId,
          bio,
          profilePic,
        }
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: updateProfile: ", e);
    }
  }
  async listProfile() {
    try {
      const result = await this.databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.profilesId
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: listProfile: ", e);
    }
  }
}

const profileService = new ProfileService();
export default profileService;
