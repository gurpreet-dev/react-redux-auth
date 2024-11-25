import React from 'react'

function InputError(props) {

    const [errors, setErrors] = React.useState({ messages: {} });

    return (
        <>
            {errors.messages.hasOwnProperty(props.field) ? errors.messages[props.field].map((error, index) => {
                return (
                    <small className="form-alert d-block text-danger px-0" key={index}>{error}</small>
                )
            }) : null}
        </>
    )
}

export default InputError