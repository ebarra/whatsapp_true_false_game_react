import React from 'react';
import {goToQuestion} from './../reducers/actions';

export default class MailItem extends React.Component {
  handleClick(idx) {
this.props.dispatch(goToQuestion(idx));
  }
  render(){
    const {subject, preview, mailer, date, isActive, idx} = this.props;
    return (
        <li onClick={()=>this.handleClick(idx)} className={"mailItem " + (isActive ? "active" : "")}>
          <p className="info">
            <span className="mailer">{mailer}</span>
            <span className="date">{date}</span>
          </p>
          <p className="subject">{subject}</p>
          <p className="preview">{preview}</p>
        </li>
    );
  }
}
