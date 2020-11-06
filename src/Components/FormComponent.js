import React, { useState } from 'react'
import { Step, Segment } from 'semantic-ui-react'
import Step2 from './Step2';
import Step3 from './Step3';
import Step1 from './Step1';
import { Button } from 'react-bootstrap';
import commonStyles from './styles/commonStyles';

const StepExampleLinkClickable = _ => {
    // step-1 data
    const [active, setActive] = useState('1')
    const [xlData, setXlData] = useState([])
    const [fileName, setFileName] = useState()
    // step-2 data
    const [errorOnSecondPage, setErrorOnSecondPage] = useState(true)
    const [bedroomCount, setBedroomCount] = useState(0)
    const [bathroomCount, setBathroomCount] = useState(0)
    const [address, setAddress] = useState('')
    const [desc, setDesc] = useState('')

    // step3
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [feat, setFeat] = useState(null)
    const [base64urls, setBase64urls] = useState([])

    // reset form data
    const resetForm = _ => {
        setXlData([])
        setBedroomCount(0)
        setBathroomCount(0)
        setAddress('')
        setDesc('')
        setFeat('')
        setUploadedFiles('')
        setBase64urls([])
    }


    const step1ChildProps = {
        fileName, setFileName, setActive, active, xlData, setXlData,
        resetForm
    }

    const step3ChildProps = {
        feat, setFeat, uploadedFiles, setUploadedFiles, setBase64urls, base64urls
    }

    const formDataProps = {
        bedroomCount, setBedroomCount, setErrorOnSecondPage,
        xlData, setXlData, bathroomCount, setBathroomCount,
        address, setAddress, desc, setDesc
    }

    // returns components accordingly to the steps
    const handleComponents = _ => {
        switch (active) {
            case "1":
                return <Step1 {...step1ChildProps} />
            // return <Step3 />
            case "2":
                return <Step2 {...formDataProps} />
            case "3":
                return <Step3 {...step3ChildProps} />
            default:
                return null
        }
    }

    const submit = _ => {
        console.log(
            'submitted data__',
            'form data =>',
            'bedcount :', bedroomCount,'bathroomCount:', bathroomCount, 'address:', address, 'description:', desc,
            'upload Data =>', base64urls
        )
        setActive("1")
        resetForm()        
    }

    return (
        <>
            <div style={commonStyles.vh50}>
                <Step.Group style={commonStyles.wd100}>
                    <Step active={active === '1'} icon='file alternate outline' link title='1' />
                    <Step active={active === '2'} icon='home' link title='2' />
                    <Step active={active === '3'} icon='image' link title='3' />
                </Step.Group>
                <Segment attached> {handleComponents()} </Segment>
            </div>

            {/* navigation buttons */}
            <div>
                {active !== "1" &&
                    <Button variant="primary" size="sm" onClick={() => setActive((parseInt(active) - 1).toString())}>
                        Previous
                </Button>} {' '}

                {(xlData.length > 0 || !errorOnSecondPage) &&
                    <Button variant="primary" size="sm"
                        onClick={() => {
                            active === '3' ?
                                submit() :
                                setActive((parseInt(active) + 1).toString())
                        }}
                    >
                        {active === '3' ? 'Submit' : 'Next'}
                    </Button>
                }{' '}
            </div>
        </>
    )

}

export default StepExampleLinkClickable
