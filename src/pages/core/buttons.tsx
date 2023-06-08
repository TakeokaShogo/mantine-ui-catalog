import {
  ActionIcon,
  Avatar,
  Button,
  CloseButton,
  Container,
  CopyButton,
  FileButton,
  Group,
  UnstyledButton,
  Text,
} from '@mantine/core'
import { useState } from 'react'
import { IconSettings } from '@tabler/icons-react'

export default function Demo() {
  const [file, setFile] = useState<File | null>(null)

  return (
    <>
      <Container size='xs' px='xs' py='xl'>
        <h2>Action Icon</h2>
        <Group>
          <ActionIcon variant='transparent'>
            <IconSettings size='1rem' />
          </ActionIcon>
          <ActionIcon variant='subtle'>
            <IconSettings size='1rem' />
          </ActionIcon>
          <ActionIcon variant='default'>
            <IconSettings size='1rem' />
          </ActionIcon>
          <ActionIcon variant='outline'>
            <IconSettings size='1rem' />
          </ActionIcon>
          <ActionIcon variant='filled'>
            <IconSettings size='1rem' />
          </ActionIcon>
          <ActionIcon variant='light'>
            <IconSettings size='1rem' />
          </ActionIcon>
        </Group>

        <h2>Button</h2>
        <Group>
          <Button variant='outline'>outline</Button>
          <Button variant='white'>white</Button>
          <Button variant='light'>light</Button>
          <Button variant='default'>default</Button>
          <Button variant='filled'>filled</Button>
          <Button variant='gradient'>gradient</Button>
          <Button variant='subtle'>subtle</Button>
        </Group>

        <h2>CloseButton</h2>
        <Group>
          <CloseButton aria-label='Close modal' />
          <CloseButton title='Close popover' size='xl' iconSize={20} />
        </Group>

        <h2>CopyButton</h2>
        <CopyButton value='https://mantine.dev'>
          {({ copied, copy }) => (
            <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
              {copied ? 'Copied url' : 'Copy url'}
            </Button>
          )}
        </CopyButton>

        <h2>FileButton</h2>
        <Group>
          <FileButton onChange={setFile} accept='image/png,image/jpeg'>
            {(props) => <Button {...props}>Upload image</Button>}
          </FileButton>
        </Group>

        <Text size='sm' align='left' mt='sm'>
          Picked file: {file ? file.name : ''}
        </Text>

        <h2>UnstyledButton</h2>
        <UnstyledButton>
          <Group>
            <Avatar size={40} color='blue'>
              BH
            </Avatar>
            <div>
              <Text>Bob Handsome</Text>
              <Text size='xs' color='dimmed'>
                bob@handsome.inc
              </Text>
            </div>
          </Group>
        </UnstyledButton>
      </Container>
    </>
  )
}
