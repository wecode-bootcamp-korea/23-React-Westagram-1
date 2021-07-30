import React from 'react';
import { withRouter } from 'react-router-dom';
import Story from './Asides/Story/Story';
import Feed from './Asides/Feed/Feed';
import Recommended from './Asides/Recommended/Recommended';

import styles from './Main.module.scss';
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

    // backEnd data fetch
    // fetch(`http://10.58.1.50:8000/posts`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ feedInfo: data.posts });
    //   });
  }

  render() {
    const { feedInfo } = this.state;

    const { loginId } = this.props.history.location.state;
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
            <Story userInfo={loginId} />
            {feedInfo.map(elem => {
              return (
                <Feed
                  key={elem.id}
                  userInfo={loginId}
                  feedProfileImg={elem.feedProfileImg}
                  feedImg={elem.feedImg}
                  feedId={elem.feedId}
                  feedText={elem.feedText}
                />
                // backEnd component
                // <Feed
                //   key={elem.id}
                //   postId={elem.id}
                //   userInfo={loginId}
                //   feedProfileImg={elem.img}
                //   feedImg={elem.img}
                //   feedId={elem.user_name}
                //   feedText={elem.content}
                // />
              );
            })}
          </section>
          <Recommended userInfo={loginId} />
        </main>
      </section>
    );
  }
}

export default withRouter(MainDongwu);
