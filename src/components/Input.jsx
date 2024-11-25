import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    name="",
    className = "",
    help="",
    ...props
}, ref) {

    const id = useId();

    return (
        <div className="mb-3">
            {label && <label htmlFor={id} className="form-label">{label}</label>}
            <input type={type} name={name} className="form-control" id={id} ref={ref} {...props} />
            {help && <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>}
        </div>
    )
})

export default Input