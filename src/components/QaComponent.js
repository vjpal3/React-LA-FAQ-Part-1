import React from 'react';

const QaComponent = (props) => {
  return(
    <div className="qa-tile">
      <div className="qtab-wrapper">
        <div className={props.className} onClick={props.handleClick}>{props.tabText}</div>
        <div className="q-div">{props.data.question}</div>
      </div>
      { props.tabText === '-' &&
        <div className="a-div">{props.data.answer}</div>
      }
      <hr />
    </div>
  );
};

export default QaComponent;
