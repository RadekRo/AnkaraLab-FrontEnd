import "./Faq.css";

const Faq = (props) => (
  <div>
  <div className="question">Faq nr: {props.faq.id}</div>
  <div className="answer"><b>Pytanie:</b><br/> {props.faq.question}</div>
  <div><b>Odpowiedź:</b><br/> {props.faq.answer}</div>
  </div>
)

export default Faq;