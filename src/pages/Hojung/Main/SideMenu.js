import React from 'react';
import MyProfile from './sidemenu/MyProfile';
import StoryBox from './sidemenu/StoryBox';
import RecommendationBox from './sidemenu/RecommendationBox';
import Footer from './sidemenu/Footer';

class SideMenu extends React.Component {
  render() {
    return (
      <div className="sideMenu">
        <MyProfile />
        <StoryBox />
        <RecommendationBox />
        <Footer />
      </div>
    );
  }
}

export default SideMenu;
