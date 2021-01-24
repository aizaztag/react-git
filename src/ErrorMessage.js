function ErrorMessage(props) {
    return (
      <div className="error-message">
        <h1> Something went wrong </h1>  
        <p> {props.message} </p>
      </div>
    )
  }