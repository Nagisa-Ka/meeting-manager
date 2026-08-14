"use client";

export default function RadioForm(props){
    const {label="", name, list} = props;

    return(
        <fieldset>

            <legend>
                {label}
            </legend>

            {list && list.length > 0 ? (
                list.map((item) => (<div key={item.id}>
                    <label>                        
                        <input
                            type="radio"
                            name={name}
                            value={item.id}
                            required/>
                        {item.kind} （{item.day}）<br/>
                        参加者： {item.members.join("、")}
                    </label><br/><br/>
                </div>))):(
                    <p>表示内容がありません。</p>
            )}

        </fieldset>
    )
    
}