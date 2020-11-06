// validating excel data

export const excelValidator = data => {
    console.log(data)
    const columnNames = ["address", "bedroom", "bathroom", "desc"]

    const validateColumns = columns => {
        console.log('inside')
        let flag = false
        columns?.map(itm => {
            if (columnNames.includes(itm)) flag = true
            else {
                flag = false;
                return
            }
        })
        return flag
    }

    console.log(data)
    return (data?.[0]?.length === 4 && validateColumns(data[0]))
}