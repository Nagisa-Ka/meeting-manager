"use client";

function DateForm(props) {
    const {label, name} = props;

    return(
        <div className="input-container">
            <label
                className="input-label"
                htmlFor={name}>
                {label}
            </label>

            <input
                className="input-style"
                type="date"
                id={name}
                name={name}
                required
            />
        </div>
    )
}

export default DateForm