import React,{Fragment}  from 'react';

class Song extends React.Component {

  render(){
    const info= `${this.props.title} by ${this.props.artist}`;

    return (

        <Fragment>

      <div >
          info={"Play " + info}
          id={this.props.position}


      </div>

        <div >
          <h2>{this.props.position}. {this.props.title}</h2>
          <h3>{this.props.artist}</h3>
        </div>


      </Fragment>
    );
  }
};

export default Song;
