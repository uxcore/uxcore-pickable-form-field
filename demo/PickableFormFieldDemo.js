/**
 * PickableFormField Component Demo for uxcore
 * @author FE-Girl
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const PickableFormField = require('../src');
const Constants = require('uxcore-const');
const Form = require('uxcore-form');
const Button = require('uxcore-button');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [],
      mode: Constants.MODE.EDIT
    };

    this.handleModeChange = this.handleModeChange.bind(this);
  }

  handleModeChange() {
    let me = this;
    me.setState({
        mode: me.state.mode == Constants.MODE.EDIT ? Constants.MODE.VIEW : Constants.MODE.EDIT
    })
  }

  render() {

    const me = this;
    const itemsData = [{
      text: '条件一',
      value: 1,
      num: 15
    }, {
      text: '条件二',
      value: 2,
      num: 20
    }, {
      text: '条件三',
      value: 3,
      disable: true
    }];

    return (
      <div>
        <Form jsxmode={me.state.mode}>
          <PickableFormField
            jsxlabel="test:"
            jsxname="test"
            data={itemsData}
            multiple={true}
            value={me.state.value}
            type="hook" />
        </Form>
        <Button onClick={me.handleModeChange}>切换模式</Button>
      </div>
    );
  }
}

module.exports = Demo;
