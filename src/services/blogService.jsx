import { Client, Databases, ID } from "appwrite";
import appwriteConfig from "../config";

class BlogService {
  client;
  databases;
  BlogService() {
    this.client = new Client()
      .setEndpoint(appwriteConfig.endpoint)
      .setProject(appwriteConfig.projectId);
    this.databases = new Databases(this.client);
  }

  async createBlog({ title, content, featuredImage, authorId }) {
    try {
      const result = await this.databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.blogsId,
        ID.unique(),
        {
          title,
          content,
          featuredImage,
          authorId,
        }
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: createBlog: ", e);
    }
  }
  async deleteBlog({ documentId }) {
    try {
      const result = await this.databases.deleteDocument(
        appwriteConfig.databaseId,
        appwriteConfig.blogsId,
        documentId
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: deleteBlog: ", e);
    }
  }
  async getBlog({ documentId }) {
    try {
      const result = await this.databases.getDocument(
        appwriteConfig.databaseId,
        appwriteConfig.blogsId,
        documentId
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: getBlog: ", e);
    }
  }
  async updateBlog(documentId, { title, content, featuredImage, authorId }) {
    try {
      const result = await this.databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.blogsId,
        documentId,
        {
          title,
          content,
          featuredImage,
          authorId,
        }
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: updateBlog: ", e);
    }
  }
  async listBlogs() {
    try {
      const result = await this.databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.blogsId
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: listBlogs: ", e);
    }
  }
}

const blogService = new BlogService();
export default blogService;
