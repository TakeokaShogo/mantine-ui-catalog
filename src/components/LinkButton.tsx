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
      <UnstyledButton
        sx={(theme) => ({
          // backgroundColor: theme.colors.gray[0],
          borderRadius: theme.radius.sm,
          '&:hover': {
            backgroundColor: theme.colors.gray[2],
          },
        })}
        w='100%'
        px='md'
        py='0.3rem'
      >
        {/* <ThemeIcon variant='light' color='gray' size='md'>
            {resizedIcon}
          </ThemeIcon> */}
        <Text color='gray.6'>{props.children}</Text>
      </UnstyledButton>
    </Link>
  )
}
