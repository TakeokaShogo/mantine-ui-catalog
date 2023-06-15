import { UnstyledButton, Text } from '@mantine/core'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface iconButtonLinkProps {
  href: string
  // icon: ReactNode
  children: ReactNode
}

export default function LinkButton(props: iconButtonLinkProps) {
  // const resizedIcon = React.cloneElement(props.icon, { size: '1rem' })
  return (
    <Link href={props.href}>
      <UnstyledButton py='0.3rem'>
        {/* <ThemeIcon variant='light' color='gray' size='md'>
            {resizedIcon}
          </ThemeIcon> */}
        <Text
          color='blue.5'
          sx={(theme) => ({
            '&:hover': {
              color: theme.colors.blue[9],
            },
          })}
        >
          {props.children}
        </Text>
      </UnstyledButton>
    </Link>
  )
}
