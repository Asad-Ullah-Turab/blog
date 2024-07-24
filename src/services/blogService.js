import { Client, Databases, ID } from "appwrite";
import appwriteConfig from "../config";

class BlogService {
  client;
  databases;
  today;

  BlogService() {
    this.client = new Client()
      .setEndpoint(appwriteConfig.endpoint)
      .setProject(appwriteConfig.projectId);
    this.databases = new Databases(this.client);
  }

  async createBlog({ title, content, authorId, featuredImage, isPublished }) {
    this.today = new Date();

    try {
      const result = await this.databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.blogsId,
        ID.unique(),
        {
          title,
          content,
          authorId,
          createdAt: this.today.toISOString(),
          updatedAt: this.today.toISOString(),
          featuredImage,
          isPublished,
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
  async updateBlog(
    documentId,
    { title, content, authorId, createdAt, featuredImage }
  ) {
    try {
      const result = await this.databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.blogsId,
        documentId,
        {
          title,
          content,
          authorId,
          createdAt,
          updatedAt: this.today.toISOString(),
          featuredImage,
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
