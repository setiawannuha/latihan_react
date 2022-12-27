const TextComponent = ({text, isActive}) => {
  return (
    <div>
      {
        isActive?(
          <p>{text}</p>
        ):null
      }
    </div>
  )
}

export default TextComponent