import React from 'react';

class StoryBox extends React.Component {
  render() {
    let storyData = [
      {
        src: '/images/Hojung/profile_img.jpeg',
        writer: '_yum_s',
        writerTime: '16분전',
      },
      {
        src: '/images/Hojung/profile_img.jpeg',
        writer: 'hj___s2',
        writerTime: '11분전',
      },
      {
        src: '/images/Hojung/profile_img.jpeg',
        writer: 'w0nhong_____',
        writerTime: '9분전',
      },
    ];
    let storyLists = [];
    storyData.forEach(el => {
      storyLists.push(
        <li key={el.writer}>
          <a href="/">
            <div className="storyImg">
              <div className="storyLine">
                <img alt="스토리 이미지" src={el.src} />
              </div>
            </div>
            <div className="storyWriter">
              <div className="writer">{el.writer}</div>
              <div className="writerTime">{el.writerTime}</div>
            </div>
          </a>
        </li>
      );
    });
    return (
      <div className="storyBox">
        <div className="tit">
          <h3>스토리</h3>
          <a href="/">모두보기</a>
        </div>
        <div className="con">
          <ul>{storyLists}</ul>
        </div>
      </div>
    );
  }
}

export default StoryBox;
