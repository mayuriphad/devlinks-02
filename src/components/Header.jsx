export default function Header({ title, image }) {
  return (
    <header>
      <img className="dish" src={image} />
      <h1>{title}</h1>
    </header>
  )
}
