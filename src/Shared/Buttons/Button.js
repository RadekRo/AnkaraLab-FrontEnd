import "./Button.css";

const Button = ({path, title, buttonSort} ) => (
    <button>
      <a href={path} className={buttonSort}>{title}</a>
    </button>
  )
  
  export default Button;