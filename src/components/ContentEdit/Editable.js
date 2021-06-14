import React from 'react';
import ContentEditable from 'react-contenteditable';

class MyComponent extends React.Component {
  constructor() {
    super()
    this.contentEditable = React.createRef();
    this.state = {html: '<h1>Hello World </h1>'}
  };

  handleChange = e => {
    this.setState({ html: e.target.value });
  };



  render() {
    return <ContentEditable
      innerRef={this.contentEditable}
      html={this.state.html}
      disabled={false}
      onChange={this.handleChange}
      tagName="article"
    /> 
  }
}

export default MyComponent