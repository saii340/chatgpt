import React from 'react'
import { DisplayMedium } from 'baseui/typography'
import { motion } from 'framer-motion'
import { useStyletron } from 'baseui'
import { useImmer } from 'use-immer'

import { Block } from 'baseui/block'

export const Header = (
) => {
  const [css] = useStyletron()
  const [customTheme, setCustomTheme] = useImmer({})

  return (
    <Block
      alignItems={'flex-start'}
      display={'flex'}
      justifyContent={'space-between'}
      backgroundColor={(customTheme.atY > 0) ? 'rgba(255, 255, 255, 0.90)' : '#f9f9f9'}
      top={0}
      padding={'32px'}
      margin={'0 24px 8px 32px'}
      position={'sticky'}>
      <motion.div
        transition={{
          duration: 1
        }}
        initial={{
          opacity: 0,
          y: '-32'
        }}
        animate={{
          opacity: 1,
          y: 0
        }}>
        <DisplayMedium
          color={'#0d2b52'}
          className={css({
            fontSize: customTheme.atY > 0 ? '24px' : undefined,
            lineHeight: customTheme.atY > 0 ? '48px' : undefined
          })}>
          Content generator
          </DisplayMedium>
        </motion.div>
        <motion.div
          whileHover={{ color: '#ff0356' }}>
        </motion.div>
    </Block>
  )
}
