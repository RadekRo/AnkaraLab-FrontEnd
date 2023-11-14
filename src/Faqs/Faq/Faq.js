const Faq = (props) => (
  <div>
    <div>
      <h1></h1>
    </div>
  <div>Faq nr: {props.faq.id}</div>
  <div>Pytanie: <b>{props.faq.question}</b></div>
  <div>Odpowiedź: {props.faq.answer}</div>
  </div>
)

export default Faq;