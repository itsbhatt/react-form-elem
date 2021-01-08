function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../Input';
import { StyledWrapper, StyledHeader, StyledArrow, StyledPopover, List, ListItem } from './styled';
import { useSelectLogic } from './selectLogic';
/**
 * Dynamic Select
 */

const Select = (props, ref) => {
  const {
    size = 'medium',
    className,
    placeholder,
    error = false,
    value,
    options,
    onChange,
    width = '100%'
  } = props;
  const textInputStyles = {
    size,
    error,
    placeholder,
    width: '100%'
  };
  const headerRef = useRef(null);
  const popoverRef = useRef(null);
  const {
    onOptionClick,
    optionsListVisible,
    setOptionsListVisible
  } = useSelectLogic(onChange, {
    headerRef,
    popoverRef
  });
  return /*#__PURE__*/React.createElement(StyledWrapper, {
    className: className,
    width: width,
    innerSize: size
  }, /*#__PURE__*/React.createElement(StyledHeader, {
    ref: headerRef,
    onClick: () => setOptionsListVisible(true)
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    value: value ? value.value : ''
  }, textInputStyles)), /*#__PURE__*/React.createElement(StyledArrow, {
    innerSize: size,
    upwards: optionsListVisible
  })), /*#__PURE__*/React.createElement(StyledPopover, {
    ref: popoverRef,
    width: width,
    visible: optionsListVisible
  }, /*#__PURE__*/React.createElement(List, null, options?.map(option => /*#__PURE__*/React.createElement(ListItem, {
    key: option.value,
    innerSize: size,
    onClick: () => onOptionClick(option)
  }, option.label)))));
};

Select.propTypes = {
  /**
   * Placeholder
   */
  placeholder: PropTypes.string,

  /**
   * Classname
   */
  className: PropTypes.string,

  /**
   * How large should the select be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * width of the select
   */
  width: PropTypes.string,

  /**
   * value of the select
   */
  value: PropTypes.object,

  /**
   * select options
   */
  options: PropTypes.array.isRequired,

  /**
   * on change handler
   */
  onChange: PropTypes.func
};
Select.defaultProps = {
  size: 'medium',
  width: '220px',
  onChange: undefined,
  value: {
    label: '',
    value: ''
  },
  options: [],
  placeholder: 'Select option'
};
export default Select;