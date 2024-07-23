const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  commentsId: import.meta.env.VITE_APPWRITE_COMMENTS_COLLECTION_ID,
  blogsId: import.meta.env.VITE_APPWRITE_BLOGS_COLLECTION_ID,
  profilesId: import.meta.env.VITE_APPWRITE_PROFILES_COLLECTION_ID,
  profilePicBucketId: import.meta.env.VITE_APPWRITE_PROFILEPIC_BUCKET_ID,
  featuredImageBucketId: import.meta.env.VITE_APPWRITE_FEATUREDIMAGE_BUCKET_ID,
};

export default appwriteConfig;
