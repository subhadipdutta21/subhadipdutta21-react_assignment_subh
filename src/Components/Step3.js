import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import commonStyles from './styles/commonStyles';

const Step3 = ({ feat, setFeat, uploadedFiles, setUploadedFiles, setBase64urls, base64urls }) => {
    useEffect(() => () => {
        uploadedFiles?.length > 0 && uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    }, [uploadedFiles]);

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                const binaryStr = reader.result
                let temp = [...base64urls]
                temp.push(binaryStr.substr(0, 100)) // taking the substring to avoid overflow in console
                setBase64urls(temp)
            }
            reader.readAsDataURL(file)

            setUploadedFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        })
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: 'image/*', onDrop, maxFiles: 4 })

    const thumbs = uploadedFiles ? uploadedFiles?.map((file, idx) => (
        <div style={commonStyles.thumb} key={file.name} onClick={() => { setFeat(feat === idx ? null : idx) }}>
            {idx === feat && <i style={commonStyles.selectIcon} className="check icon"></i>}
            <div style={commonStyles.thumbInner}>
                <img src={file.preview} style={commonStyles.img} alt='' />
            </div>
        </div>
    )) : ''


    return (
        <>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <div style={commonStyles.uploadContainer}>
                            <p style={commonStyles.pt50}>Drop the files here ...</p>
                        </div> :
                        <p> Drag 'n' drop some files here, or click to select files,<strong> *max limit 4 </strong></p>
                }
            </div>

            {
                uploadedFiles?.length > 0 &&
                <strong>*U can select one as Featured Image</strong>
            }

            {
                uploadedFiles?.length > 0 &&
                <aside style={commonStyles.thumbsContainer}>
                    {thumbs}
                </aside>
            }
        </>
    )
}

export default Step3;
