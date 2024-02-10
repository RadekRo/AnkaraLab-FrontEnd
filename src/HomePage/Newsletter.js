import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="d-flex align-items-center justify-content-center Newsletter rounded p-2 text-dark">
      Zapisz się do Newslettera: <input className='input rounded border-0 bg-light ms-3 me-3' placeholder='Twój e-mail'></input>
      <button className='btn btn-sm btn-dark'>Zapisz</button>
    </div>
  );
};
export default Newsletter;