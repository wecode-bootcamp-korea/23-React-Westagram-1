import React from 'react';
import Personal from '../Personal/Personal';
import './StoryBox.scss';

class StoryBox extends React.Component {
  render() {
    const { story } = this.props;
    return (
      <div className="storyBox">
        <div className="storybar">
          <span className="username"> 스토리</span>
          <span className="bold">모두보기</span>
        </div>
        <div>
          {story &&
            story.map(ele => {
              return (
                <Personal
                  key={ele.id}
                  nickname={ele.nickname}
                  Information={ele.Information}
                  alt={ele.alt}
                  src={ele.src}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default StoryBox;
