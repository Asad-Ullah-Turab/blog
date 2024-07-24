import { useEffect, useState } from "react";
import authService from "../services/authService";
import blogService from "../services/blogService";
import { Account } from "appwrite";
import commentService from "../services/commentService";

export default function Test() {
  const [user, setUser] = useState();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Auth Testing
    const login = async () => {
      try {
        const userData = await authService.login({
          email: "test1@gmail.com",
          password: "test1test1",
        });
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        // Handle error, e.g., set error state, show notification, etc.
      }
    };
    // login();
    const registerUser = async () => {
      const userData = await authService.register({
        email: "test1@gmail.com",
        password: "test1test1",
        name: "Test Dummy",
      });
      console.log("User Data: " + userData);
    };
    // registerUser();
    // authService.logout();
    const getCurrentUser = async () => {
      const userData = await authService.getCurrentUser();
      setUser(userData);
      // console.log(userData);
    };
    getCurrentUser();

    // Blog Testing
    const createBlog = async () => {
      try {
        const blogData = await blogService.createBlog({
          title: "Test Blog 2",
          content: "lol lol",
          authorId: "testing id",
          featuredImage: "featured image testing",
          isPublished: true,
        });
        setBlog(blogData);
      } catch (error) {
        console.error("Failed to create blog:", error);
        // Handle error, e.g., set error state, show notification, etc.
      }
    };
    // createBlog();
    const deleteBlog = async () => {
      const result = await blogService.deleteBlog({
        documentId: "66a0ab8d0015758e4c55",
      });
    };
    // deleteBlog();
    const getBlog = async () => {
      const result = await blogService.getBlog({
        documentId: "66a119e0000f205f0991",
      });
      console.log(result);
    };
    // getBlog();
    const updateBlog = async () => {
      const result = await blogService.updateBlog("66a119e0000f205f0991", {
        title: "Updated Title",
        content: "Updated Content",
        authorId: "Updated Author ID",
        featuredImage: "Updated Featured Image",
      });
      console.log(result);
    };
    // updateBlog();
    const listBlogs = async () => {
      const result = await blogService.listBlogs();
      console.log(result);
    };
    // listBlogs();

    // Comment Service Testing
    const createComment = async () => {
      const result = await commentService.createComment({
        blogId: "66a119e0000f205f0991",
        authorId: "updated 23 author id",
        content: "test content 5",
      });
      console.log(result);
    };
    // createComment();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h1>Test</h1>
      <h1>{user && user.name}</h1>
      <h1>{user && user.$id}</h1>
      <h1>{blog && blog.content}</h1>
    </div>
  );
}
