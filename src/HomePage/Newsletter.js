import './Newsletter.css';

const emailValidation = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailPattern.test(email);
}

const handleNewsletter = () => {
  alert('Dziękujemy za zapisanie się do Newslettera!');
};

const Newsletter = () => {
  return (
    <div className="d-flex align-items-center justify-content-center Newsletter rounded p-2 text-dark">
      Zapisz się do Newslettera: <input className='p-2 rounded border-0 bg-light ms-3 me-3' placeholder='Twój e-mail' />
      <button className='btn btn-sm btn-dark' onClick={handleNewsletter}>Zapisz</button>
    </div>
  );
};
export default Newsletter;