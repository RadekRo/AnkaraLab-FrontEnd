import "./Faq.css";

const Faq = (props) => (
  <div>
    <div>
      <h1></h1>
    </div>
  <div className="question">Faq nr: {props.faq.id}</div>
  <div className="answer">Pytanie: {props.faq.question}</div>
  <div>Odpowiedź: {props.faq.answer}</div>
  </div>
)

export default Faq;