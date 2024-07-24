import { Client, ID, Storage } from "appwrite";
import appwriteConfig from "../config";

class FileService {
  client;
  storage;

  constructor() {
    this.client = new Client()
      .setEndpoint(appwriteConfig.endpoint)
      .setProject(appwriteConfig.projectId);

    this.storage = new Storage(this.client);
  }
  async uploadFeaturedImage(file) {
    try {
      const result = await this.storage.createFile(
        appwriteConfig.featuredImageBucketId,
        ID.unique,
        file
      );
      if (result) return result;
      else return false;
    } catch (error) {
      console.error("Failed to upload featured image:", error);
      return false;
    }
  }
  async deleteFeaturedImage(fileId) {
    try {
      const resut = await this.storage.deleteFile(
        appwriteConfig.featuredImageBucketId,
        fileId
      );
      return resut;
    } catch (error) {
      console.error("Failed to delete featured image:", error);
      return false;
    }
  }
  async uploadProfilePic(file) {
    try {
      const result = await this.storage.createFile(
        appwriteConfig.profilePicBucketId,
        ID.unique,
        file
      );
      if (result) return result;
      else return false;
    } catch (error) {
      console.error("Failed to upload featured image:", error);
      return false;
    }
  }
  async deleteProfilePic(fileId) {
    try {
      const resut = await this.storage.deleteFile(
        appwriteConfig.profilePicBucketId,
        fileId
      );
      return resut;
    } catch (error) {
      console.error("Failed to delete featured image:", error);
      return false;
    }
  }
}

const fileService = new FileService();
export default fileService;
