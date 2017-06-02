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
const Pickable = require('uxcore-pickable');

const { Item } = PickableFormField;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [],
      mode: Constants.MODE.EDIT,
    };

    this.handleModeChange = this.handleModeChange.bind(this);
    this.changeFormData = this.changeFormData.bind(this);
  }

  handleModeChange() {
    const me = this;
    me.setState({
      mode: me.state.mode === Constants.MODE.EDIT ? Constants.MODE.VIEW : Constants.MODE.EDIT,
    });
  }

  changeFormData(values, name, pass) {
    console.log(values);
  }

  render() {
    const me = this;
    const itemsData = [{
      text: '条件一',
      value: 1,
      num: 15,
    }, {
      text: '条件二',
      value: 2,
      num: 200,
    }, {
      text: '条件三',
      value: 3,
      disable: true,
    }, {
      text: '条件三',
      value: 4,
      disable: true,
    }, {
      text: '条件三',
      value: 5,
      disable: true,
    }, {
      text: '条件三',
      value: 6,
      disable: true,
    }, {
      text: '条件三',
      value: 7,
      disable: true,
    }, {
      text: '条件三',
      value: 8,
      disable: true,
    }];

    return (
      <div>
        <Form jsxmode={me.state.mode} jsxonChange={me.changeFormData}>
          <PickableFormField
            jsxlabel="test:"
            jsxname="test"
            multiple
            max={99}
            type="simple"
            enableFold
            defaultfoldItems={false}
            maxLines={2}
          >
            {itemsData.map((data, index) => (
              <Item key={index} value={data.value} disabled={data.disable}>{data.text}</Item>
            ))}
          </PickableFormField>
        </Form>
        <Form jsxmode={me.state.mode} jsxonChange={me.changeFormData}>
          <PickableFormField
            jsxlabel="test2:"
            jsxname="test2"
            multiple
            max={99}
          >
            {itemsData.map((data, index) => (
              <Item key={index} value={data.value + 11} number={data.num} disabled={data.disable}>{data.text + 11}</Item>
            ))}
          </PickableFormField>
        </Form>
        <Pickable onChange={(value) => { console.log(value); }}>
          {itemsData.map((data, index) => (
            <Item key={index} value={data.value + 21} number={data.num} disabled={data.disable}>{data.text + 22}</Item>
          ))}
        </Pickable>
        <Button onClick={me.handleModeChange}>切换模式</Button>
      </div>
    );
  }
}

module.exports = Demo;
