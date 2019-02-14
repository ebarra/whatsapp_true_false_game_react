import React from 'react';
import truncate from 'lodash/truncate';
export default class MailDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  handlePopUp(i) {
    this.setState({popup: this.state.popup === i ? undefined : i})
  }
  render(){
    const {subject, preview, mailer, date, mailContent} = this.props;
    return (
        <div className="mailDetail">
          <div className="header">
            <p className="mainText">
              <p className="subject">{subject}: </p>
              <p className="preview">{preview} <span className="icon fa fa-sign-out"></span></p>
            </p>
            <div className="mailer">
              <div className="imgProf"> <span className="letter">{mailer[0]}</span> </div>
              <div className="text">
                <p className="info">
                  <span className="mailerPerson">{mailer.split("@")[0]}</span>
                  <span className="date">{date}</span>
                </p>
                <p className="mailerMail">{mailer}</p>
              </div>
            </div>
          </div>
          <div className="mailContent">
            <div className={"img " + mailContent.image.alignment}><img src={mailContent.image.href} alt="main_logo"/></div>
            {mailContent.paragraphs.map((p, i) => {
              return [p.text ? <p className="text" key={"text" + i}>{p.text}</p> : null,
                p.link ?
                  <div className="fakeLink" key={"link" + i}>
                    <p className="link" onClick={()=>{this.handlePopUp(i)}} >{p.link.text}</p>
                    <p className="popUp" style={{display: this.state.popup === i ? 'block' : 'none'}}>
                      <span className="triangle"></span>
                      <span className="text"> Este link te llevaría a:</span>
                      <br/>
                      <span className="maliciousLink">{truncate(p.link.href, {'length': 55})}</span>
                    </p>
                  </div>
                  : null,
                p.button ? <button className="button" key={"button" + i}>{p.button}</button> : null,
                p.image ? <div key={"img" + i} className={"img " + p.image.alignment}><img src={p.image.href} alt={p.image.href}/></div> : null];
            }
            )}
          </div>
          {/* {mailContent.paragraphs.map(p => {
            console.log(Object.values(p)[0]);
            return (p.link ? <p>{Object.values(p)[0].text}</p> : <p>{Object.values(p)[0]}</p>);
          })} */}
          {/* {mailContent.paragraphs.map(p => <p>{p.text}</p>)} */}
          {/* {mailContent.paragraphs.map(p => {
            console.log(Object.values(p)[0]);
            return <p>{Object.values(p)[0]}</p>;
          })} */}
        </div>
    );
  }

  componentWillReceiveProps(nextProps){
    if(this.props.idx !== nextProps.idx) {
      this.setState({popup: undefined})
    }
  }
}
