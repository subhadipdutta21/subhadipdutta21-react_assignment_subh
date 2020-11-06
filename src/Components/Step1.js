import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { ExcelRenderer } from 'react-excel-renderer';
import { excelValidator } from '../Helper';
import commonStyles from './styles/commonStyles';


const Step1 = ({ setActive, active, xlData, setXlData, fileName, setFileName, resetForm }) => {
    
    const [showFailed, setShowFailed] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    return (
        <Form>
            <div className="mb-3">

                {showSuccess && <Alert variant={`success`}> Excel is Valid, Please Proceed to Next Page </Alert>}
                {showFailed && <Alert variant={`danger`}> Excel is invalid! </Alert>}

                <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Upload CSV</Form.File.Label>                    
                    <Form.File.Input                        
                        onChange={e => {
                            let fileObj = e.target.files[0];
                            console.log(fileObj)
                            ExcelRenderer(fileObj, (err, resp) => {
                                if (err) console.log(err);
                                else {
                                    console.log(resp)
                                    let status = excelValidator(resp.rows)
                                    status ? setShowSuccess(true) : setShowFailed(true)
                                    setTimeout(() => { setShowFailed(false); setShowSuccess(false) }, 2000)
                                    console.log('excelvalidation status(', excelValidator(resp.rows))
                                    setXlData(resp?.rows?.[1])
                                }
                            });
                        }} />
                </Form.File>
            </div>

            <div className="mb-3" style={commonStyles.tl}>
                <Button variant="primary" onClick={() => { setXlData([]); setActive((parseInt(active) + 1).toString()); resetForm() }}>Start from scratch</Button>
            </div>
        </Form>
    )
}

export default Step1;