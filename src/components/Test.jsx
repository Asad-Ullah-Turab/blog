import { useEffect, useState } from "react";
import authService from "../services/authService";
import blogService from "../services/blogService";

export default function Test() {
  const [user, setUser] = useState(null);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const login = async () => {
      try {
        const userData = await authService.login({
          email: "asadullahturab47@gmail.com",
          password: "a1b2c3d4@",
        });
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        // Handle error, e.g., set error state, show notification, etc.
      }
    };
    // login();
    const createBlog = async () => {
      try {
        const blogData = await blogService.createBlog({
          title: "Test Blog",
          content: "Hui Hui",
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
  }, []); // Empty dependency array means this effect runs once after the initial render

  console.log(user);
  return (
    <div>
      <h1>Test</h1>
      <h1>{user.name}</h1>
      <h1>{blog && blog.content}</h1>
    </div>
  );
}
