/**
 * PickableFormField Component for uxcore
 * @author FE-Girl
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'uxcore-form-field';
import Pickable from 'uxcore-pickable';
import assign from 'object-assign';
import Constants from 'uxcore-const';

const { Item } = Pickable;

const pickableProps = ['type', 'multiple', 'enableFold', 'defaultfoldItems', 'maxLines', 'locale', 'simpleValueInSingleMode'];

class PickableFormField extends FormField {
  constructor(props) {
    super(props);
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
      value,
    });
    me.handleDataChange(value);
  }

  renderChildren() {
    const me = this;
    const { prefixCls, type, children, max } = me.props;

    const rendered = React.Children.map(children, (child, index) => React.cloneElement(child, {
      prefixCls: `${prefixCls}-item`,
      type,
      jsxmax: max,
      key: index,
    }));
    return rendered;
  }

  renderField() {
    const me = this;
    const arr = [];
    const mode = me.props.jsxmode || me.props.mode;

    if (mode === Constants.MODE.EDIT) {
      const propsObj = {};
      pickableProps.forEach((prop) => {
        propsObj[prop] = me.props[prop];
      });
      arr.push(
        <Pickable
          key={0}
          onChange={me.handleChange}
          value={me.state.value || []}
          {...propsObj}
        >{me.renderChildren()}</Pickable>
      );
    } else if (mode === Constants.MODE.VIEW) {
      if (me.state.value) {
        me.state.value.forEach((val) => {
          React.Children.map(me.props.children, (child, i) => {
            if (child.props.value === val) {
              arr.push(<span key={i} style={{ marginRight: '10px' }}>{child.props.children}</span>);
            }
          });
        });
      }
    }

    return arr;
  }
}

PickableFormField.Item = Item;
PickableFormField.displayName = 'PickableFormField';
PickableFormField.defaultProps = assign({}, FormField.defaultProps, {
  multiple: true,
  value: [],
  type: 'normal',
  max: 99,
});

PickableFormField.propTypes = assign({}, FormField.propTypes, {
  multiple: PropTypes.bool,
  value: PropTypes.array,
  type: PropTypes.string,
  max: PropTypes.number,
});

export default PickableFormField;
