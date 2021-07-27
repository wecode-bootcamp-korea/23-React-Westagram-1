import React from 'react';
import { INFO } from './StoryData';

class StoryBox extends React.Component {
  render() {
    return (
      <div className="storyBox">
        <div className="tit">
          <h3>스토리</h3>
          <a href="/">모두보기</a>
        </div>
        <div className="con">
          <ul>
            {INFO.map(el => {
              return (
                <li key={el.id}>
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
            })}
            ;
          </ul>
        </div>
      </div>
    );
  }
}

export default StoryBox;
