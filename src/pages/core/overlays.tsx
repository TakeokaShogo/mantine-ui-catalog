import {
  Container,
  Affix,
  rem,
  Transition,
  Button,
  Group,
  Dialog,
  TextInput,
  Drawer,
  HoverCard,
  Box,
  LoadingOverlay,
  Text,
  Menu,
  Modal,
  AspectRatio,
  Overlay,
  Popover,
  Tooltip,
  Image,
} from '@mantine/core'
import { useWindowScroll, useDisclosure } from '@mantine/hooks'
import {
  IconArrowUp,
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react'
import { useState } from 'react'

export default function Demo() {
  const [scroll, scrollTo] = useWindowScroll()
  const [openedDialog, dialogObj] = useDisclosure(false)
  const [openedDrawer, drawerObj] = useDisclosure(false)
  const [visible, loadingObj] = useDisclosure(false)
  const [openedModal, modalObj] = useDisclosure(false)
  const [overlayVisible, setVisible] = useState(true)

  return (
    <Container size='xs' px='xs' py='xl'>
      <h2>Affix</h2>
      <p>Scroll down and look to the bottom right.</p>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition='slide-up' mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size='1rem' />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              This is Affix (Scroll to top)
            </Button>
          )}
        </Transition>
      </Affix>

      <h2>Dialog</h2>
      <Group>
        <Button onClick={dialogObj.toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={openedDialog} withCloseButton onClose={dialogObj.close} size='lg' radius='md'>
        <Text size='sm' mb='xs' weight={500}>
          Subscribe to email newsletter
        </Text>

        <Group align='flex-end'>
          <TextInput placeholder='hello@gluesticker.com' sx={{ flex: 1 }} />
          <Button onClick={dialogObj.close}>Subscribe</Button>
        </Group>
      </Dialog>

      <Drawer opened={openedDrawer} onClose={drawerObj.close} title='This is Drawer.'>
        {/* Drawer content */}
      </Drawer>

      <h2>Drawer</h2>
      <Group>
        <Button onClick={drawerObj.open}>Open Drawer</Button>
      </Group>

      <h2>HoverCard</h2>
      <Group>
        <HoverCard width={280} shadow='md'>
          <HoverCard.Target>
            <Button>Hover to reveal the card</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size='sm'>
              Hover card is revealed when user hovers over target element, it will be hidden once
              mouse is not over both target and dropdown elements
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>

      <h2>LoadingOverlay</h2>
      <Box maw={400} pos='relative'>
        <LoadingOverlay visible={visible} overlayBlur={2} />
        {/* ...other content */}
        <Box>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </Box>
      </Box>

      <Group>
        <Button onClick={loadingObj.toggle}>Toggle LoadingOverlay</Button>
      </Group>

      <h2>Menu</h2>
      <Menu shadow='md' width={200}>
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
          <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
          <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
          <Menu.Item
            icon={<IconSearch size={14} />}
            rightSection={
              <Text size='xs' color='dimmed'>
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
          <Menu.Item color='red' icon={<IconTrash size={14} />}>
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <h2>Modal</h2>
      <Modal opened={openedModal} onClose={modalObj.close} title='This is Modal'>
        {/* Modal content */}
      </Modal>

      <Group>
        <Button onClick={modalObj.open}>Open modal</Button>
      </Group>

      <h2>Overlay</h2>
      <AspectRatio ratio={16 / 9} maw={400}>
        <Image src='https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80' />
        {overlayVisible && (
          <Overlay
            gradient='linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)'
            opacity={0.85}
          />
        )}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mt='xl'>
        Toggle overlay
      </Button>

      <h2>Popover</h2>
      <Popover width={200} position='bottom' withArrow shadow='md'>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size='sm'>This is uncontrolled popover, it is opened when button is clicked</Text>
        </Popover.Dropdown>
      </Popover>

      <h2>Tooltip</h2>
      <Tooltip label='Tooltip'>
        <Button variant='outline'>Button with tooltip</Button>
      </Tooltip>
    </Container>
  )
}
