import React from 'react'
import { Block } from 'baseui/block'
import { Modal, ROLE } from 'baseui/modal'
import { ParagraphMedium } from 'baseui/typography'
import { Spinner } from 'baseui/spinner'
import { withStyle } from 'baseui'

export const SpinnerModal = ({
  isModalOpen,
  setIsModalOpen
}) => {

  return (
    <>
      <Modal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        animate
        autoFocus
        closeable={false}
        role={ROLE.dialog}>
        <Block
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          position={'absolute'}
          left={'50'}
          marginBottom={'50%'}
          background-color= {'red'}
          z-index= {1}>
          <Block
            paddingTop={'120px'}
            paddingLeft={'120px'}
            margin={'auto'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}>
            <ExtraLargeSpinner 
              $color='#0d2b52' />
              <ParagraphMedium
                color={'#0000FF'}>
                  Please wait while we generate your case study
              </ParagraphMedium>
          </Block>
        </Block>
      </Modal>
    </>
  )
}

const ExtraLargeSpinner = withStyle(Spinner, {
  width: '52px',
  height: '52px',
  borderLeftWidth: '6px',
  borderRightWidth: '6px',
  borderTopWidth: '6px',
  borderBottomWidth: '6px',
  borderTopColor: '#0000FF',
})