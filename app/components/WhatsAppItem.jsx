import React from 'react';
import {goToQuestion} from '../reducers/actions';

export default class WhatsAppItem extends React.Component {
  handleClick(idx) {
this.props.dispatch(goToQuestion(idx));
  }
  render(){
    const {subject, preview, mailer, date, isActive, idx} = this.props;
    return (
        <li className={"mailItem " + (isActive ? "active" : "")} onClick={()=>this.handleClick(idx)}>
          <div className="imgProf"> <span className="letter">{mailer[0]}</span> </div>
          <div className="text">
            <p className="info">
              <span className="mailer">{mailer.split("@")[0]}</span>
              <span className="date">{date}</span>
            </p>
            <p className="subject">{subject}</p>
            <p className="preview">{preview}</p>
          </div>
        </li>
    );
  }
}
