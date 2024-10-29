import styles from "./Home.module.css";
import React from "react";

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Cuide da sua saúde com nosso atendimento especializado</h1>
        <p className={styles.subtitle}>
          Tratamentos personalizados para melhorar sua qualidade de vida.
        </p>
        <button className={styles.ctaButton}>Agende uma consulta</button>
      </section>

      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>Sobre mim</h2>
        <div className={styles.imageContainer}>
        <img 
          src="https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/362807721_985445505987189_4674492870634223100_n.jpg?ccb=11-4&oh=01_Q5AaIMZQurZerAdkkZcYH7NqSsj1RyGtvDt95Hz5ek2wsq7n&oe=67268F83&_nc_sid=5e03e0&_nc_cat=111" 
          alt="Fisioterapeuta Davi" 
          className={styles.aboutImage} 
        /></div>
        
        <div className={styles.textabout}>
        <p className={styles.sectionText}>
        Sou Davi Aburjeli, fisioterapeuta com 10 anos de experiência em avaliação e tratamento da dor. Nos últimos 5 anos, venho aprofundando o trabalho nos aspectos emocionais relacionados à dor, ajudando pessoas a viver com mais autonomia e menos dor.
        </p>
        </div>
      </section>

      <section className={styles.services}>
        <h2 className={styles.sectionTitle}>Serviços</h2>
        <ul className={styles.serviceList}>
          <li className={styles.serviceItem}>Reabilitação física</li>
          <li className={styles.serviceItem}>Terapia manual</li>
          <li className={styles.serviceItem}>Tratamento para dores crônicas</li>
          <li className={styles.serviceItem}>Exercícios posturais</li>
        </ul>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>Depoimentos</h2>
        <p className={styles.testimonial}>
          "Excelente profissional! Minha dor nas costas melhorou muito com o tratamento." - Renato Cifuentes
        </p>
        <p className={styles.testimonial}>
          "Recomendo! Atendimento atencioso e resultados excelentes." - Gabriel Maia
        </p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 - Dr.Davi Aburjeli  Fisioterapia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;