import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Main.module.scss';
import Feed from './Asides/Feed';
import Recommended from './Asides/Recommended';
import Nav from './Asides/Nav';

class MainDongwu extends React.Component {
  render() {
    return (
      <section className={`${styles.widthMax} ${styles.heightMax}`}>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
        <Nav />
        <main className={`${styles.mainMain}`}>
          <Feed />
          <Recommended />
        </main>
      </section>
    );
  }
}

export default withRouter(MainDongwu);
