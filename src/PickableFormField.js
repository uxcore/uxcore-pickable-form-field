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
const Constants = require('uxcore-const');

const { Item } = Pickable;
const PickableOptions = ['onChange','value','type','multiple'];
const ItemOptions = ['value','disabled','number'];

class PickableFormField extends FormField {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
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

  handleItemClick(value) {
    const me = this;
    const [...values] = me.props.value;
    const index = values.indexOf(value);
    if (!me.props.multiple) {
        me.props.onChange([value], value);
        return;
    }
    if (index !== -1) {
        values.splice(index, 1);
        me.props.onChange(values, value);
    }
    else {
        values.push(value);
        me.props.onChange(values, value);
    }
  }

  renderChildren() {
    const me = this;
    const {prefixCls, type, children, value, max} = me.props;

    const rendered = React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                prefixCls: `${prefixCls}-item`,
                type: type,
                jsxmax: max,
                onClick: me.handleItemClick,
            });
    });
    return rendered;
  }

  renderField() {
    const me = this;
    let arr = [];
    let mode = me.props.jsxmode || me.props.mode;

    if (mode === Constants.MODE.EDIT) {

      arr.push(<Pickable onChange={me.handleChange} value={me.state.value} type={me.props.type} multiple={me.props.multiple}>{me.renderChildren()}</Pickable>);

    } else if (mode === Constants.MODE.VIEW) {

      if(me.state.value){
        me.state.value.forEach(function(val,index){
          React.Children.map(me.props.children,function(child){
            if(child.props.value === val){
              arr.push(<span style={{marginRight:'10px'}}>{child.props.children}</span>)
            }
          })
        })
      }
    }

    return arr;
  }
}

PickableFormField.Item = Item;
PickableFormField.displayName = 'PickableFormField';
PickableFormField.defaultProps = assign({}, FormField.defaultProps, {
  multiple: true,
  value:[],
  type:'normal',
  max:99
});
PickableFormField.propTypes = assign({}, FormField.propTypes, {
  multiple: React.PropTypes.bool,
  value: React.PropTypes.array,
  type: React.PropTypes.string,
  max: React.PropTypes.number
});;

module.exports = PickableFormField;
