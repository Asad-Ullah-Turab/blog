import { Client, Databases, ID, Query } from "appwrite";
import appwriteConfig from "../config/config";

class CommentService {
  client;
  databases;
  constructor() {
    this.client = new Client()
      .setEndpoint(appwriteConfig.endpoint)
      .setProject(appwriteConfig.projectId);
    this.databases = new Databases(this.client);
  }

  async createComment({ blogId, authorId, content }) {
    try {
      const result = await this.databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.commentsId,
        ID.unique(),
        {
          blogId,
          authorId,
          content,
          createdAt: new Date().toISOString(),
        }
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: createComment: ", e);
    }
  }
  async deleteComment({ documentId }) {
    try {
      const result = await this.databases.deleteDocument(
        appwriteConfig.databaseId,
        appwriteConfig.commentsId,
        documentId
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: deleteComment: ", e);
    }
  }
  async getComment({ documentId }) {
    try {
      const result = await this.databases.getDocument(
        appwriteConfig.databaseId,
        appwriteConfig.commentsId,
        documentId
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: getComment: ", e);
    }
  }
  async updateComment(documentId, { blogId, authorId, content }) {
    try {
      const result = await this.databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.commentsId,
        documentId,
        {
          blogId,
          authorId,
          content,
        }
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: updateComment: ", e);
    }
  }
  async listComments() {
    try {
      const result = await this.databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.commentsId
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: listComments: ", e);
    }
  }

  async getCommentsForBlog({ blogId }) {
    try {
      const result = await this.databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.commentsId,
        [Query.equal("blogId", blogId)]
      );
      if (result) return result;
      else return null;
    } catch (e) {
      console.log("Error in DatabaseService :: getCommentForBlog: ", e);
    }
  }
}

const commentService = new CommentService();
export default commentService;
