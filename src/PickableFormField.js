/**
 * PickableFormField Component for uxcore
 * @author FE-Girl
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
const FormField = require('uxcore-form-field');
const Pickable = require('uxcore-pickable');
const assign = require('object-assign');
const isEqual = require('lodash/isEqual');
const NattyFetch = require('natty-fetch/dist/natty-fetch.pc');
const Promise = require('lie');

const { Item } = Pickable;
const PickableOptions = ['onChange','value','max','type','multiple'];
const ItemOptions = ['value','disabled','number','max'];

class PickableFormField extends FormField {

  constructor(props) {
    super(props);
    assign(this.state, {
      value: this.props.jsxvalue,
    });

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const me = this;
    if (!isEqual(nextProps.jsxvalue, me.props.jsxvalue)) {
      me.setState({
        value: nextProps.jsxvalue,
      });
    }
  }

  addSpecificClass() {
    const me = this;
    if (me.props.jsxprefixCls === 'kuma-uxform-field') {
      return `${me.props.jsxprefixCls} kuma-select-uxform-field`;
    }
    return me.props.jsxprefixCls;
  }

  componentDidMount() {
    const me = this;
  }

  handleChange(value) {
    const me = this;
    me.setState({
        value:value
    })
    me.handleDataChange(value);
  }

  renderField() {
    const me = this;
    let arr = [];

    let Items = me.props.jsxdata.map(function(item,index) {
        return (
            <Item key={index} value={item.value} number={item.num} disabled={item.disable}>{item.text}</Item>
        )
    })

    arr.push(<Pickable onChange={me.handleChange} value={me.state.value} type={me.props.jsxtype} multiple={me.props.jsxmultiple}>{Items}</Pickable>);

    return arr;
  }
}

PickableFormField.Item = Item;
PickableFormField.displayName = 'PickableFormField';
PickableFormField.defaultProps = assign({}, FormField.defaultProps, {
  jsxdata: [],
  jsxmultiple: false,
  jsxvalue:[],
  jsxtype:'normal'
});
PickableFormField.propTypes = assign({}, FormField.propTypes, {
  jsxdata: React.PropTypes.array,
  jsxmultiple: React.PropTypes.bool,
  jsxvalue: React.PropTypes.array,
  jsxtype: React.PropTypes.string
});;

module.exports = PickableFormField;
