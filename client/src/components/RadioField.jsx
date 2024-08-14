import React from 'react'
//inputIds and labelText same size arr. w/ corresponding pairs of input id attribute&label text
const RadioField = ( { legendName, inputIds, labelText } ) => {
    return(
        <fieldset>
            <legend> {legendName}: </legend>
            {inputIds.map(function(id, i) {
                return(
                <React.Fragment key={id}>
                    <input type='radio' id={id} name={legendName} />
                    <label htmlFor={id}>{labelText[i]}</label>
                </React.Fragment>)
            })}
        </fieldset>
    )
}

export default RadioField;