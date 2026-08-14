"use client";

function CheckBoxForm(props) {
    const {label, name, list} = props;

    return(
        <div className="chackbox-container">
            <label className="input-label">
                {label}
            </label>

            {list.map((item) => (
                <label key={item.idName}>
                    <input
                        className="checkbox"
                        type="checkbox"
                        name={name}
                        value={item.idName}/>
                    {item.idName}
                </label>
            ))}
        </div>
    )

}

export default CheckBoxForm