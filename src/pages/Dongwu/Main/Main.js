import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Main.module.scss';
import Story from './Asides/Story/Story';
import Feed from './Asides/Feed/Feed';
import Recommended from './Asides/Recommended/Recommended';
// import Nav from './Asides/Nav';

class MainDongwu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedInfo: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/data/Dongwu/feedData.json`)
      .then(res => res.json())
      .then(data => this.setState({ feedInfo: data }));
  }

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
        {/* <Nav /> */}
        <main className={`${styles.mainMain}`}>
          <section className={`${styles.feedSection}`}>
            <Story />
            {this.state.feedInfo.map(elem => {
              return (
                <Feed
                  key={elem.id}
                  userInfo={this.props.history.location.state.loginId}
                  feedProfileImg={elem.feedProfileImg}
                  feedImg={elem.feedImg}
                  feedId={elem.feedId}
                  feedText={elem.feedText}
                />
              );
            })}
          </section>
          <Recommended />
        </main>
      </section>
    );
  }
}

export default withRouter(MainDongwu);
