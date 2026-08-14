"use client";

function TextForm(props) {
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
                type="text"
                min="1"
                max="10"
                id={name}
                name={name}
                required
            />
        </div>
    )
}

export default TextForm