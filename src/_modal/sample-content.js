import React from 'react'
import { BEHAVIOR, Cell, Grid } from 'baseui/layout-grid'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { Modal, ROLE, SIZE } from 'baseui/modal'
import { ParagraphMedium, HeadingMedium } from 'baseui/typography'


export const SampleContentModal = ({
  isModalOpen,
  setIsModalOpen
}) => {

  return (
    <>
      <Modal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        size={SIZE.auto}
        animate
        closeable={false}
        autoFocus
        role={ROLE.dialog}>
        <Block
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          padding={'16px'}>
          <HeadingMedium
            marginTop={'16px'}
            marginBottom={'24px'}
            color={'#0d2b52'}>
              Sample Case Study Content
          </HeadingMedium>
          <Grid
            gridGaps={0}
            gridGutters={0}
            behavior={BEHAVIOR.fluid}>
            <Cell 
              span={[4, 8, 12]}>
              <ParagraphMedium>
							&nbsp; &nbsp; &nbsp; &nbsp; A US based Music Publication Company with a presence across the globe Helping the
								customer in their digital journey by migrating their legacy integrations to MuleSoft
								platform with a modern future proof integration architecture.
                <br/>
							We took over the responsibility of migrating and modernizing the customer’ s integration
								platform which was built on legacy integration tools and custom scripting. We have
								delivered a modern and a future proof architecture using MuleSoft which will serve
								their
								markets across the globe and made their integration landscape highly agile – weeks
								vs.
								months.
                <br/><br/>
                &nbsp; &nbsp; &nbsp; &nbsp; Customer’s integration eco-system surrounds around SAP application and is built in
								legacy
								integration tools and custom script. We took over this platform and moved their
								integration from legacy tools and custom scripting to MuleSoft API-led Architecture
								and
								delivered the flexibility and scale that the customer needed to connect
								applications,
								automate workflows and modernize their operations. We are working on 40+ APIs to
								integrated all the systems from different markets with their centralized ERP system
								SAP
								using SAP connector. Salesforce is going to be their single source of truth for all
								sales related data.
              </ParagraphMedium>
            </Cell>
          </Grid>
        </Block>
        <Block
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          paddingBottom={'24px'}
          marginTop={'24px'}>
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
            Close
          </Button>
        </Block>
      </Modal>
    </>
  )
}
