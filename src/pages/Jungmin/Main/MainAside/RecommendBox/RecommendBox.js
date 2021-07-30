import React from 'react';
import Personal from '../Personal/Personal';
import './RecommendBox.scss';

class RecommendBox extends React.Component {
  render() {
    const { recommendBox } = this.props;
    return (
      <div className="recommendBox">
        <div className="recommendbar">
          <span className="username"> 회원님을 위한 추천</span>
          <span className="bold">모두보기</span>
        </div>
        <div>
          {recommendBox &&
            recommendBox.map(ele => {
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

export default RecommendBox;
