import {
  Container,
  Alert,
  Loader,
  Progress,
  RingProgress,
  Skeleton,
  Notification,
  Text,
} from '@mantine/core'
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Feedback</title>
      </Head>
      <Container size='xs' px='xs' py='xl'>
        <h2>Alert</h2>
        <Alert icon={<IconAlertCircle size='1rem' />} title='Bummer!' color='red'>
          Something terrible happened! You made a mistake and there is no going back, your data was
          lost forever!
        </Alert>

        <h2>Loader</h2>
        <Loader />

        <h2>Notification</h2>
        <Notification title='Default notification'>
          This is default notification with title and body
        </Notification>

        <Notification icon={<IconCheck size='1.1rem' />} color='teal' title='Teal notification'>
          This is teal notification with icon
        </Notification>

        <Notification icon={<IconX size='1.1rem' />} color='red'>
          Bummer! Notification without title
        </Notification>

        <Notification loading title='Uploading data to the server' withCloseButton={false}>
          Please wait until data is uploaded, you cannot close this notification yet
        </Notification>

        <h2>Progress</h2>
        <Progress value={40} />

        <h2>RingProgress</h2>
        <RingProgress
          label={
            <Text size='xs' align='center'>
              Application data usage
            </Text>
          }
          sections={[
            { value: 40, color: 'cyan' },
            { value: 15, color: 'orange' },
            { value: 15, color: 'grape' },
          ]}
        />

        <h2>Skelton</h2>
        <Skeleton height={50} circle mb='xl' />
        <Skeleton height={8} radius='xl' />
        <Skeleton height={8} mt={6} radius='xl' />
        <Skeleton height={8} mt={6} width='70%' radius='xl' />
      </Container>
    </>
  )
}
