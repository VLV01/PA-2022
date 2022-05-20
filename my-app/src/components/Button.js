function Button(props) {
    return (
      <button onClick={()=>alert(props.cuidado)}>{props.teste}</button>
      
    );
  }

  export default Button;