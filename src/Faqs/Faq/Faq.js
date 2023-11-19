import "./Faq.css";

const Faq = (props) => (
  <div>
    <div>Faq nr: {props.faq.id}</div>
    <div className="question">Pytanie: {props.faq.question}</div>
    <div className="answer">Odpowiedź: {props.faq.answer}</div>
  </div>
)

export default Faq;