import {
  Anchor,
  Container,
  Breadcrumbs,
  Burger,
  Box,
  NavLink,
  Badge,
  Pagination,
  Stepper,
  Tabs,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconCircleOff,
  IconActivity,
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from '@tabler/icons-react'
import Head from 'next/head'

export default function Page() {
  const items = [
    { title: 'Mantine', href: '#' },
    { title: 'Mantine hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))

  const [opened, { toggle }] = useDisclosure(false)
  const label = opened ? 'Close navigation' : 'Open navigation'

  return (
    <>
      <Head>
        <title>Navigation</title>
      </Head>
      <Container size='xs' px='xs' py='xl'>
        <h2>Anchor</h2>
        <Anchor href='https://mantine.dev/' target='_blank'>
          Mantine docs
        </Anchor>

        <h2>Breadcrumbs</h2>
        <Breadcrumbs>{items}</Breadcrumbs>
        <Breadcrumbs separator='→' mt='xs'>
          {items}
        </Breadcrumbs>

        <h2>Burger</h2>
        <Burger opened={opened} onClick={toggle} aria-label={label} />

        <h2>NavLink</h2>
        <Box w={240}>
          <NavLink label='With icon' icon={<IconHome2 size='1rem' stroke={1.5} />} />
          <NavLink
            label='With right section'
            icon={<IconGauge size='1rem' stroke={1.5} />}
            rightSection={<IconChevronRight size='0.8rem' stroke={1.5} />}
          />
          <NavLink label='Disabled' icon={<IconCircleOff size='1rem' stroke={1.5} />} disabled />
          <NavLink
            label='With description'
            description='Additional information'
            icon={
              <Badge size='xs' variant='filled' color='red' w={16} h={16} p={0}>
                3
              </Badge>
            }
          />
          <NavLink
            label='Active subtle'
            icon={<IconActivity size='1rem' stroke={1.5} />}
            rightSection={<IconChevronRight size='0.8rem' stroke={1.5} />}
            variant='subtle'
            active
          />
          <NavLink
            label='Active light'
            icon={<IconActivity size='1rem' stroke={1.5} />}
            rightSection={<IconChevronRight size='0.8rem' stroke={1.5} />}
            active
          />
          <NavLink
            label='Active filled'
            icon={<IconActivity size='1rem' stroke={1.5} />}
            rightSection={<IconChevronRight size='0.8rem' stroke={1.5} />}
            variant='filled'
            active
          />
        </Box>

        <h2>Pagination</h2>
        <Pagination total={10} />

        <h2>Stepper</h2>
        <Stepper breakpoint='sm' active={1}>
          <Stepper.Step label='First step' description='Create an account'>
            Step 1 content: Create an account
          </Stepper.Step>
          <Stepper.Step label='Second step' description='Verify email'>
            Step 2 content: Verify email
          </Stepper.Step>
          <Stepper.Step label='Final step' description='Get full access'>
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>

        <h2>Tabs</h2>
        <Tabs defaultValue='gallery'>
          <Tabs.List>
            <Tabs.Tab value='gallery' icon={<IconPhoto size='0.8rem' />}>
              Gallery
            </Tabs.Tab>
            <Tabs.Tab value='messages' icon={<IconMessageCircle size='0.8rem' />}>
              Messages
            </Tabs.Tab>
            <Tabs.Tab value='settings' icon={<IconSettings size='0.8rem' />}>
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='gallery' pt='xs'>
            Gallery tab content
          </Tabs.Panel>

          <Tabs.Panel value='messages' pt='xs'>
            Messages tab content
          </Tabs.Panel>

          <Tabs.Panel value='settings' pt='xs'>
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </Container>
    </>
  )
}
