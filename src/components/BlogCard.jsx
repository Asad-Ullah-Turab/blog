export default function BlogCard({ image, title, description }) {
  return (
    <div>
      <img src={`${image}`} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}
