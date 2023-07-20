import React from 'react'
import { BEHAVIOR, Cell, Grid } from 'baseui/layout-grid'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { Modal, ROLE } from 'baseui/modal'
import { FormControl } from 'baseui/form-control'
import { ParagraphLarge, ParagraphMedium } from 'baseui/typography'
import { StatefulInput } from 'baseui/input'


export const LoginModal = ({
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
        role={ROLE.dialog}>
        <Block
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          padding={'16px'}>
          <ParagraphLarge
            marginTop={'16px'}
            marginBottom={'16px'}>
            Enter the details to receive the Case Study via Email
          </ParagraphLarge>
          <Grid
            gridGaps={0}
            gridGutters={0}
            gridMargins={64}
            behavior={BEHAVIOR.fluid}>
            <Cell 
              span={[4, 4, 3]}>
              <ParagraphMedium>
                * Name:
              </ParagraphMedium>
            </Cell>
            <Cell 
              span={[4, 4, 9]}>
              <FormControl>
                <StatefulInput
                  onChange={(e) => localStorage.setItem('__USER_NAME__', e.target.value)                }
                  placeholder='Your name...' />
              </FormControl>
            </Cell>
            <Cell 
              span={[4, 4, 3]}>
              <ParagraphMedium>
                * Email:
              </ParagraphMedium>
            </Cell>
            <Cell 
              span={[4, 4, 9]}>
              <FormControl>
                <StatefulInput
                  onChange={(e) => localStorage.setItem('__USER_EMAIL__', e.target.value)}
                  placeholder='Your email...' />
              </FormControl>
            </Cell>
          </Grid>
        </Block>
        <Block
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          paddingBottom={'24px'}>
          <Button
            onClick={() => setIsModalOpen(false)}
            overrides={{
              BaseButton: {
                style: () => ({
                  backgroundColor: '#0d2b52',
                  minWidth: '128px'
                })
              }
            }}>
            Submit
          </Button>
        </Block>
      </Modal>
    </>
  )
}