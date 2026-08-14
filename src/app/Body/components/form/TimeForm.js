"use client";

function TimeForm(props) {
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
                type="time"
                id={name}
                name={name}
                required
            />
        </div>
    )
}

export default TimeForm