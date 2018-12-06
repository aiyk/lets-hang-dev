import React from 'react'
import propTypes from 'prop-types'

const TextFieldGroup = ({
    name,
    placeholder, 
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
  return (
    <div className="input-group">
        <label>{label}</label>
        <input
            type={type}
            name={name}
            className="site-input"
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            value={value}
        />
        {info && <small className="input-info">{info}</small>}
        {error && (<div className="input-err">{error}</div>)}
    </div>
  )
}

TextFieldGroup.propTypes = {
    name: propTypes.string.isRequired,
    placeholder: propTypes.string,
    value: propTypes.string.isRequired,
    info: propTypes.string,
    error: propTypes.string,
    type: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    disabled: propTypes.string,
    label: propTypes.string
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;