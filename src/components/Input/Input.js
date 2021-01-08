import React from 'react'
import PropTypes from 'prop-types'
import { StyledInput, StyledWrapper } from './styled'

/**
 * Input for Numbers and Emails only
 */

const Input = (props) => {
  const {
    size,
    className,
    error,
    value,
    onChange,
    placeholder,
    width,
    ...rest
  } = props

  const styles = {
    innerSize: size,
    error,
    width
  }

  return (
    <StyledWrapper width={width} innerSize={size}>
      <StyledInput
        type={rest.type}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        {...styles}
        {...rest}
      />
    </StyledWrapper>
  )
}

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
}

Input.defaultProps = {
  type: 'email',
  size: 'medium',
  width: '220px',
  onChange: undefined,
  value: undefined,
  error: false,
  placeholder: 'email'
}

export default Input
