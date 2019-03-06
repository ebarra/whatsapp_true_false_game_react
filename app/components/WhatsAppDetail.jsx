import React from 'react';
import truncate from 'lodash/truncate';
export default class WhatsAppDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  handlePopUp(i){
    this.setState({popup:this.state.popup === i ? undefined : i});
  }
  componentWillReceiveProps(nextProps){
    if(this.props.idx !== nextProps.idx){
      this.setState({popup:undefined});
    }
  }
  render(){
    const {title, preview, whatsappContent} = this.props;
    return (
        <div className="whatsappDetail">
          <div className="whatsappContent">
            {whatsappContent.map((w, i) => {
              return [w.text ? <p className="balloon text" key={"text" + i}>{w.text} <span className="time">{w.time}</span> </p> : null,
                w.link ?
                  <div className="balloon fakeLink" key={"link" + i}>
                    <p className="link" onClick={()=>{this.handlePopUp(i);}}>{w.link.text}</p>
                    <span className="time">{w.time}</span>
                    <p className="popUp" style={{display:this.state.popup === i ? 'block' : 'none'}}>
                      <span className="triangle"/>
                      <span className={"text"}>Este link te llevaría a:</span>
                      <br/>
                      <span className="maliciousLink">{truncate(w.link.href, {'length':55})}</span>
                    </p>
                  </div>
                  : null,
                w.image ? <div key={"img" + i} className="balloon img"><img src={w.image} alt={w.image}/> <span className="time">{w.time}</span></div> : null,
              ];
            }
            )}
          </div>
        </div>
    );
  }
}
