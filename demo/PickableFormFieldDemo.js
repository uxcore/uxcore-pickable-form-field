/**
 * PickableFormField Component Demo for uxcore
 * @author FE-Girl
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const PickableFormField = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value:[]
    };
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
        <PickableFormField
          jsxlabel="test:"
          jsxname="test"
          jsxdata={itemsData}
          jsxmultiple={true}
          jsxvalue={me.state.value}
          jsxtype="hook" />
      </div>
    );
  }
}

module.exports = Demo;
