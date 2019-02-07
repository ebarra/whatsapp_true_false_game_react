import React from 'react';

export default class MailDetail extends React.Component {
  render(){
    const {subject, preview, mailer, date, mailContent} = this.props;
    return (
        <div className="mailDetail">
          <img src={mailContent.image.href} alt="main_logo"/>
          {mailContent.paragraphs.map((p)=> <p>{p.text}</p>)}
        </div>
    );
  }
}
