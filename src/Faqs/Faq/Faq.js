import "./Faq.css";

const Faq = (props) => (
  <div>
    <div>Faq nr: <b>{props.faq.id}</b></div>
    <div className="question"><b>Pytanie: </b>{props.faq.question}</div>
    <div className="answer"><b>Odpowiedź:</b> {props.faq.answer}</div>
    <div><br></br></div>
  </div>
)

export default Faq;