"use client";

function PulldownForm(props) {
    const {label, list, name} = props;

    return(
        <div className="input-container">
            <label
                className="input-label"
                htmlFor={name}>
                {label}
            </label>

            <select
                className="input-style"
                id={name}
                name={name}
                required>

                {list.map((list) =>
                    <option
                        key={list.idName}
                        value={list.idName}>
                        {list.idName}
                    </option>
                )}
            </select>
        </div>
    )
}

export default PulldownForm