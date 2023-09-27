const Select = ({name, values, handleChange}) => {
    return(
        <select name={name} handleChange={handleChange}>
        {
            values.map((value)=>{
                return <option value={value}>{value}</option>
            })
        }</select>
    )
}

export default Select;