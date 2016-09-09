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

const { Item } = Pickable;
const PickableOptions = ['onChange','value','type','multiple'];
const ItemOptions = ['value','disabled','number'];

class PickableFormField extends FormField {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }

    this.handleChange = this.handleChange.bind(this);
  }

  addSpecificClass() {
    const me = this;
    if (me.props.jsxprefixCls === 'kuma-uxform-field') {
      return `${me.props.jsxprefixCls} kuma-pickable-uxform-field`;
    }
    return me.props.jsxprefixCls;
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

    let Items = me.props.data.map(function(item,index) {
        return (
            <Item key={index} value={item.value} number={item.num} disabled={item.disable}>{item.text}</Item>
        )
    })

    arr.push(<Pickable onChange={me.handleChange} value={me.state.value} type={me.props.type} multiple={me.props.multiple}>{Items}</Pickable>);

    return arr;
  }
}

PickableFormField.Item = Item;
PickableFormField.displayName = 'PickableFormField';
PickableFormField.defaultProps = assign({}, FormField.defaultProps, {
  data: [],
  multiple: true,
  value:[],
  type:'normal'
});
PickableFormField.propTypes = assign({}, FormField.propTypes, {
  data: React.PropTypes.array,
  multiple: React.PropTypes.bool,
  value: React.PropTypes.array,
  type: React.PropTypes.string
});;

module.exports = PickableFormField;
