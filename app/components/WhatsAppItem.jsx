import React from 'react';
import {goToQuestion} from '../reducers/actions';

export default class WhatsAppItem extends React.Component {
  handleClick(idx){
    this.props.dispatch(goToQuestion(idx));
  }
  render(){
    const {chatImg, title, preview, isActive, whatsappContent, idx} = this.props;
    return (
        <li className={"whatsappItem " + (isActive ? "active" : "")} onClick={()=>this.handleClick(idx)}>
          <div className="imgProf"> <img src={chatImg}/></div>
          <div className="text">
            <p className="subject">{title}</p>
            <p className="preview">{preview}</p>
          </div>
          <p className="time">{whatsappContent.map(q => q.time)[whatsappContent.length-1]}</p>
        </li>
    );
  }
}
