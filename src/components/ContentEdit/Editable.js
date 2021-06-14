import React from 'react';
import ContentEditable from 'react-contenteditable';
// Mock User
const user = {
  name: 'Admin',
  group: 'Admin',
};

class MyComponent extends React.Component {
  constructor() {
    super()
    this.contentEditable = React.createRef();
    this.state = { html: '<h2>Hello World </h2>' }
    console.log('the value of the ref', this.contentEditable.current);
  };

  handleChange = e => {
    this.setState({ html: e.target.value });
    console.log('the ref change inside handleChange', this.contentEditable);
  };

  checkUserPriv = (user) => {
    if (user?.group === 'Admin') return true;

    return false;
  }

  render() {
    return <ContentEditable
      innerRef={this.contentEditable}
      html={this.state.html}
      disabled={this.checkUserPriv(user) ? false : true}
      onChange={this.handleChange}
      tagName="article"
    /> 
  };
};

export default MyComponent;
