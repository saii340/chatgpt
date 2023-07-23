import axios from 'axios'
import React, { useState, ChangeEvent } from 'react'
import { BEHAVIOR, Cell, Grid } from 'baseui/layout-grid'
import { Block } from 'baseui/block'
import { Button, SHAPE } from 'baseui/button'
import { FileUploader } from 'baseui/file-uploader'
import { FormControl } from 'baseui/form-control'
import { LabelMedium } from 'baseui/typography'
import { StatefulInput } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { useStyletron } from 'baseui'

import { SpinnerModal } from '../_modal/spinner'
import { SampleContentModal } from '../_modal/sample-content'

export const GeneratorForm = () => {
  const [css] = useStyletron()
  const [content, setContent] = useState('')
  const [companyName, setCompanyName] = useState()
  const [chatResponse, setChatResponse] = useState('')
  const [editable, setEditable] = useState(false)
  const [editedContent, setEditedContent] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [spinner, setSpinner] = useState(false)
  const [sampleContent, setSampleContent] = useState(false)
  // const [file, setFile] = useState([])

  // const handleFileChange = (e) => {
  //   if (e.target.files) {
  //     setFile(e.target.files[0]);
  //   }
  // }

  // const handleUploadClick = () => {
  //   if (!file) {
  //     return
  //   }
  // }

  const handleSubmit = () => {
    setSpinner(true)
    const AUTH_TOKEN = 'Bearer token'
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': AUTH_TOKEN,
      },
      data: {
        "message": content
      },
  }
  axios.post("https://auroproai.com/chat", config)
  .then(function (response) {
    setChatResponse(response?.data?.apiResponse)
    setEditable(true)
  })
  .catch((error) => {
    return error
  })
  .finally(function () {
    setSpinner(false)
  })
  }

  const handleReset = () => {
    setChatResponse('')
  }

  const generateContent = () => {
    const AUTH_TOKEN = 'Bearer token'
    const config = {
      headers: {
          // 'Content-Type': 'application/json',
          'content-type': 'file.type',
          'Accept': 'application/json',
          'Authorization': AUTH_TOKEN,
      },
      data: {
        "action": "generate",
        "apiResponse": chatResponse,
        "name": localStorage.getItem('__USER_NAME__'),
        "email": "sudha.yerakala@auropro.com",
        "clientName": companyName,
        "imageFile": imageFile
      },
  }
  axios.post("https://auroproai.com/generate", config)
  .then(function (response) {    
  })
  .catch((error) => {
    return error
})
  }

  return (
    <>
      <Grid
        gridGaps={0}
        gridGutters={0}
        gridMargins={64}
        behavior={BEHAVIOR.fluid}>
        <Cell 
          span={12}>
            <Block
              display={'flex'}
              flexDirection={'row'}>
              <LabelMedium
                color={'grey'}
                marginBottom={'24px'}>
                To develop a comprehensive case study, kindly provide your input, facilitating an enriched and detailed analysis. To view sample content,&nbsp; 
              </LabelMedium>
              <LabelMedium
                color={'blue'}
                className={css({
                  ':hover': {
                    color: '#007FFF',
                  }
                })}
                onClick={() => setSampleContent(true)}>
                  click here
              </LabelMedium>
            </Block>
        </Cell>
        <FormControl>
          <Textarea
            resize='vertical'
            onChange={(e) => setContent(e.target.value)}
              onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
              }
            }}
            placeholder='Insert your content here...'
            overrides={{                                                                                                                                                                                                         
              Root: {
                style: () => ({
                  minWidth: '100%'
                })
              }
            }} />
        </FormControl>
      </Grid>
      <Block
        display={'flex'}
        justifyContent={'center'}
        marginBottom={'16px'}
        marginTop={'16px'}>
        <Button
          onClick={() => handleSubmit() }
          shape={SHAPE.pill}
          overrides={{
            BaseButton: {
              style: () => ({
                backgroundColor: '#6495ED',
                minWidth: '128px',
                ':hover': {
                  backgroundColor: '#0096FF',
                }
              })
            }
          }}>
          Submit
        </Button>
        <Block width={'12px'} />
        <Button
          onClick={() => handleReset() }
          shape={SHAPE.pill}
          overrides={{
            BaseButton: {
              style: () => ({
                backgroundColor: '#6495ED',
                minWidth: '128px',
                ':hover': {
                  backgroundColor: '#0096FF',
                }
              })
            }
          }}>
          Reset
        </Button>
      </Block>
      <Grid
        gridGaps={0}
        gridGutters={0}
        gridMargins={64}
        behavior={BEHAVIOR.fluid}>
        <Cell span={12}>
          <LabelMedium
            color={'grey'}
            marginBottom={'24px'}>
            Here is the enhanced version:
          </LabelMedium>
        </Cell>
        <FormControl>
          <>
            <Block
              position={'relative'}
              display={'flex'}
              justifyContent={'center'}>
              <Textarea
                resize='vertical'
                readOnly={!editable}
                onChange={(e) => setEditedContent(e.target.value)}
                  onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                  }
                }}
                value={chatResponse ? chatResponse : '' }
                placeholder='Your generated content apear here...'
                overrides={{
                  Root: {
                    style: () => ({
                      minWidth: '100%'
                    })
                  }
                }}
                />     
            </Block>
          </>
        </FormControl>
        <Cell span={[2, 4, 3]}>
          <LabelMedium
            color={'grey'}>
            Enter your company name
          </LabelMedium>
        </Cell>
        <Cell span={[2, 4, 9]}>
          <FormControl>
            <StatefulInput
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder='Type here...' />
          </FormControl>
        </Cell>
        <Cell span={[2, 4, 3]}>
          <LabelMedium
            color={'grey'}>
            Upload your company logo
          </LabelMedium>
        </Cell>
        <Cell span={[2, 4, 3]}>
          <FormControl
            label={imageFile?.name}>
            {/* <StatefulInput type="file" onChange={handleFileChange} /> */}
            <FileUploader
              accept={['image/svg+xml', 'image/png', 'image/jpeg', 'multipart/form-data']}
              multiple={false}
              onDrop={(acceptedFiles, rejectedFiles) => {
                'handle file upload...'
                console.log("acceptedFiles:", acceptedFiles[0])
                setImageFile(acceptedFiles[0])
                // acceptedFiles?.map(item => 
                //   setImageFile(item?.name))
              }} />
          </FormControl>
        </Cell>
        <Cell span={[2, 4, 6]} />
        <Cell span={[2, 4, 12]}>
          <Block
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
            marginBottom={'48px'}>
            <LabelMedium
              color={'grey'}
              marginTop={'48px'}
              marginBottom={'24px'}>
              Like the content you see? Then feel free to proceed and generate the Case Study
            </LabelMedium>
            <Button
              onClick={() => generateContent() }
              overrides={{
                BaseButton: {
                  style: () => ({
                    backgroundColor: '#6495ED',
                    minWidth: '128px',
                    ':hover': {
                      backgroundColor: '#0096FF',
                    }
                  })
                }
              }}>
              Generate
            </Button>
          </Block>
        </Cell>
      </Grid>
      { 
        spinner && 
        <SpinnerModal 
          isModalOpen={spinner}
          setIsModalOpen={setSpinner} />
      }
      { 
        sampleContent && 
        <SampleContentModal 
          isModalOpen={sampleContent}
          setIsModalOpen={setSampleContent} />
      }
    </>
  )
}

