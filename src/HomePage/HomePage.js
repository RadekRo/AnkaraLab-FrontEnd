import "./HomePage.css";
import Button from "../Shared/Buttons/Button";

const HomePage = () => (
    <div>
      <Button path="/products/1" title="Odbitki fotograficzne" buttonSort="button1"></Button>
      <Button path="/products/3" title="Gadżety" buttonSort="button1"></Button>
      {/* <a href="/products/1" className="panel">Odbitki fotograficzne</a>
      <a href="/products/3" className="panel">Gadżety</a> */}
   </div>
  )
  
  export default HomePage;