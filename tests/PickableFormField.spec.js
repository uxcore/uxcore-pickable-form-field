import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import PickableFormField from '../src';
import Form from 'uxcore-form/build/Form';
import Constants from 'uxcore-const';

Enzyme.configure({ adapter: new Adapter() });

describe('PickableFormField', () => {
    it('should be able to pick item', () => {
        class Demo extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    jsxvalues: {
                        value: ['foo']
                    },
                    mode: Constants.MODE.EDIT,
                }
            }

            render() {
                const { mode, jsxvalues } = this.state;

                return (
                    <Form jsxmode={mode} jsxvalues={jsxvalues}>
                        <PickableFormField
                            jsxlabel="test:"
                            jsxname="value"
                            multiple={false}>
                            <PickableFormField.Item value="foo">Foo</PickableFormField.Item>
                            <PickableFormField.Item value="bar">Bar</PickableFormField.Item>
                        </PickableFormField>
                    </Form>
                );
            }
        }

        const wrapper = mount(<Demo />);
        const activeItem = wrapper.find('.kuma-pickable-item.active');
        expect(activeItem.text()).to.be('Foo');

        const inactiveItem = wrapper.find('.kuma-pickable-item').not('.active');
        inactiveItem.simulate('click');
        const newActiveItem = wrapper.update().find('.kuma-pickable-item.active');
        expect(newActiveItem.text()).to.be('Bar');
    });

    it('should not be able to pick item when in view mode', () => {
        class Demo extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    jsxvalues: {
                        value: ['foo']
                    },
                    mode: Constants.MODE.VIEW,
                }
            }

            render() {
                const { mode, jsxvalues } = this.state;

                return (
                    <Form jsxmode={mode} jsxvalues={jsxvalues}>
                        <PickableFormField
                            jsxlabel="test:"
                            jsxname="value"
                            multiple={false}>
                            <PickableFormField.Item value="foo">Foo</PickableFormField.Item>
                            <PickableFormField.Item value="bar">Bar</PickableFormField.Item>
                        </PickableFormField>
                    </Form>
                );
            }
        }

        const wrapper = mount(<Demo />);
        const items = wrapper.find('.kuma-pickable-item');
        expect(items.length).to.be(0);
    });
});