import { BlogCard } from "../components"

export default function Blogs() {
  return (
    <div className="mt-20">
      <div>
        <p className="text-white text-9xl">
          Popular Blogs
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
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
