import React from "react";


// Info.defaultProps={
//   title:'Default'
// }

class Info extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count:0,
    };
    this.buttonPressed =this.buttonPressed.bind(this)
  }

  buttonPressed(){
    this.setState({ 
      count:this.state.count +1,
    })
  }

  render(props) {
    const showTitle = true;
    const title = this.props.title;

    if (showTitle) {
      return (
        <>
          <h1>{title}</h1>
          <p>Manage your stuff.</p>
          <p>Count: {this.state.count}</p>
          <button onClick={this.buttonPressed} > Add +1 </button>
        </>
      );
    }
  }
  }

export default Info;
