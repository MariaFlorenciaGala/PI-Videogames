import "./button.styles.css";


function Button(props){
    return(
        <div className="container-button">
            <button>
                {props}
            </button>
        </div>
    )
}

export default Button;