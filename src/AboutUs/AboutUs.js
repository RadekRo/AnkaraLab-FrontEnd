import React from 'react';
import './AboutUs.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <h1>O Firmie</h1>

      <div className="about-us-info">
        <p>
          Grupa Ankara.pl to twór wirtualny, stanowiący swego rodzaju łącznik dla czterech niezależnych witryn internetowych: www.ankaralab.com, www.only4kids.pl, www.fabrykawizytowek.pl oraz www.plgaleria.com. Właścicielem Grupy jest spółka Ankara Rocławscy, Smelkowska s.c. Główna działalność Grupy zawiera się w trzech słowach: fotografia, druk cyfrowy, skanowanie. Do tych trzech podstawowych obszarów działania próbuje dołączyć najnowsze dziecko Grupy: sklep z zabawkami. Dywersyfikacja pozwala nam na umożliwienie naszym klientom osiągnięcia określonych korzyści na wszystkich stronach Grupy w ramach zamawiania na jednej, dwóch lub trzech witrynach. Zapraszamy do współpracy!
        </p>

        <div className="about-us-icons">
          <div className="about-us-icon">
            <i className="fas fa-user"></i>
            <p>Osoby decyzyjne:</p>
            <p>Radosław Rocławski - Właściciel Grupa Ankara.pl.<br/>e-mail: r.roclawski@ankara.pl</p>
            <p>Katarzyna Rocławska - Właściciel Grupa Ankara.pl<br/>e-mail: k.roclawska@ankara.pl</p>
          </div>
          </div>

          {/* <div className="about-us-icon">
            <i className="fas fa-images"></i>
            /<p>Logotypy:</p>
            <div className="about-us-logos">
              <img src="logotypA.png" alt="Logotyp A"/>
              <img src="logotypB.png" alt="Logotyp B"/>
              <img src="logotypC.png" alt="Logotyp C"/>
            </div>
          </div>
        </div> */}

        <div className="about-us-timeline">
          <div className="about-us-timeline-item">
            <h3>2002 - 16 czerwca</h3>
            <p>Powstaje cyfrowe studio foto-poligrafii Ankara s.c. Początkowo jako laboratorium fotograficzne z punktem usług reprograficznych oraz skanowania. Dzięki współpracy z AGFA - laboratorium zyskuje certyfikat Agfa Image Center i z szyldem solidnego partnera próbuje zaistnieć na rynku usług w Trójmieście.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;