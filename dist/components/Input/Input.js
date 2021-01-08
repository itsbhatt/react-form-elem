function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledWrapper } from './styled';
/**
 * Input for Numbers and Emails only
 */

const Input = props => {
  const {
    size,
    className,
    error,
    value,
    onChange,
    placeholder,
    width,
    ...rest
  } = props;
  const styles = {
    innerSize: size,
    error,
    width
  };
  return /*#__PURE__*/React.createElement(StyledWrapper, {
    width: width,
    innerSize: size
  }, /*#__PURE__*/React.createElement(StyledInput, _extends({
    type: rest.type,
    value: value,
    onChange: onChange,
    className: className,
    placeholder: placeholder
  }, styles, rest)));
};

Input.propTypes = {
  /**
   * Placeholder
   */
  placeholder: PropTypes.string,

  /**
   * Input type
   */
  type: PropTypes.oneOf(['number', 'email']),

  /**
   * Classname
   */
  className: PropTypes.string,

  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * width of the input
   */
  width: PropTypes.string,

  /**
   * value of the input
   */
  value: PropTypes.string,

  /**
   * on change handler
   */
  onChange: PropTypes.func,

  /**
   * error
   */
  error: PropTypes.bool
};
Input.defaultProps = {
  type: 'email',
  size: 'medium',
  width: '220px',
  onChange: undefined,
  value: undefined,
  error: false,
  placeholder: undefined
};
export default Input;