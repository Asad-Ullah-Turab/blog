import { BlogCard } from "../components"

export default function Blogs() {
  return (
    <div className="mt-20">
      <div>
        <p className="text-white text-9xl">
          Popular Blogs
        </p>
      </div>
      <div className="grid grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}
