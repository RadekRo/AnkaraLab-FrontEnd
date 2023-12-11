import React from 'react';
import './BottomBox.css';

function BottomBox() {
  return (
    <div className="bottom-box">
      <div className="content">
        <div className="contact-wrapper">
          <div className="contact-box">
            <div className="contacts">
              <div className="order-status">
                <i className="fa fa-cube"></i>
                <strong><a href="">Sprawdź status zamówienia(jeśli stworzymy taką stronkę </a></strong>
              </div>
              <div className="phone">
                <i className="fa fa-phone"></i>
                <span>Infolinia</span><br />
                <strong><a href="tel:66666666">666-666-666</a></strong>
              </div>
              <div className="mail">
                <i className="fa fa-envelope"></i>
                <strong><a className="" title="" data-a="" data-b="" href="#"></a></strong>
                <span>lub: <a href="/contact">formularz kontaktowy</a></span>
              </div>
            </div>
            <div id="newsletter">
              <h2>Newsletter</h2>
              <form action="/newsletter.html" method="post">
                <input type="text" name="email" value="" className="text" placeholder="Wpisz swój e-mail" />
                <input type="submit" name="zapisz" value="Zapisz" className="button-newsletter" />
                <input type="hidden" name="formaction" value="addContactShort" />
              </form>
              <p>
                Co 2 tygodnie nowości, promocje i specjalne rabaty.
                <a href="">Zobacz</a>
              </p>
            </div>
            <div id="loyalclub">
              <a href="loyalclub" title="loyalclub" target="_blank">
                <img src="" alt="loyalclub" />
              </a>
              <p>
                Zbieraj punkty za zakupy i zadania w Ankara, wymieniaj na nagrody, zyskuj dedykowane zniżki!
                <a href="loyalclub" target="_blank" rel="noreferrer">Dołącz do programu</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBox;