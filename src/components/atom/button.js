const Button = ({data, title, subtitle}) => {
  if(!data){
    return(
      <button>
        {title} - {subtitle}
    </button>
    )
  }else{
    return(
      <button>
        {title} - {subtitle} - {JSON.stringify(data)}
      </button>
    )
  }
}

export default Button