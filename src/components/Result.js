import React from 'react';

function Result(props) {
  return (
    <div>
      <h1 className="result-header">Result</h1>
      <div className="result-wrapper">
        {props.user1GameItem && <span>{props.user1GameItem.name}</span>}
        <span className="result">{props.result}</span>
        {props.user2GameItem && <span>{props.user2GameItem.name}</span>}
      </div>
    </div>
  );
}

export default Result;
