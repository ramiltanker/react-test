import React from "react";

// Styles
import styles from "./Cards.module.css";
// Styles

function Cards() {
  return (
    <section className={styles.cards}>
      <div className={styles.card}>
        <h2 className={styles.card_title}>Заголовок карточки 1</h2>
        <p className={styles.card_text}>Текст карточки 1</p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.card_title}>Заголовок карточки 2</h2>
        <p className={styles.card_text}>Текст карточки 2</p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.card_title}>Заголовок карточки 3</h2>
        <p className={styles.card_text}>Текст карточки 3</p>
      </div>
    </section>
  );
}

export default Cards;
