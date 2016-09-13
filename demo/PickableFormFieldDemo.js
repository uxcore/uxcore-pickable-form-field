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

const {Item} = PickableFormField;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [],
      mode: Constants.MODE.EDIT
    };

    this.handleModeChange = this.handleModeChange.bind(this);
    this.changeFormData = this.changeFormData.bind(this);
  }

  handleModeChange() {
    let me = this;
    me.setState({
        mode: me.state.mode == Constants.MODE.EDIT ? Constants.MODE.VIEW : Constants.MODE.EDIT
    })
  }

  changeFormData(values, name, pass) {
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
      num: 200
    }, {
      text: '条件三',
      value: 3,
      disable: true
    }];

    return (
      <div>
        <Form jsxmode={me.state.mode} jsxonChange={me.changeFormData}>
          <PickableFormField
            jsxlabel="test:"
            jsxname="test"
            multiple={true}
            max={99}
            value={me.state.value}
            type="simple">
            {itemsData.map(function(data,index) {
              return (
                <Item key={index} value={data.value} number={data.num} disabled={data.disable}>{data.text}</Item>
              )
            })}
            </PickableFormField>
        </Form>
        <Button onClick={me.handleModeChange}>切换模式</Button>
      </div>
    );
  }
}

module.exports = Demo;
