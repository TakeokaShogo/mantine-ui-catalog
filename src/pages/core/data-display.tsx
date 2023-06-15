import {
  Image,
  useMantineTheme,
  ColorSwatch,
  Container,
  Accordion,
  Avatar,
  Box,
  BackgroundImage,
  Center,
  Badge,
  Card,
  Group,
  Button,
  Indicator,
  Kbd,
  Spoiler,
  ThemeIcon,
  Timeline,
  Text,
} from '@mantine/core'
import {
  IconStar,
  IconPhoto,
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from '@tabler/icons-react'
import Head from 'next/head'

export default function Page() {
  const theme = useMantineTheme()
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.colors[color][6]} />
  ))

  return (
    <>
      <Head>
        <title>Data Display</title>
      </Head>
      <Container size='xs' px='xs' py='xl'>
        <h2>Accordion</h2>
        <Accordion defaultValue='customization'>
          <Accordion.Item value='customization'>
            <Accordion.Control>Customization</Accordion.Control>
            <Accordion.Panel>
              Colors, fonts, shadows and many other parts are customizable to fit your design needs
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value='flexibility'>
            <Accordion.Control>Flexibility</Accordion.Control>
            <Accordion.Panel>
              Configure components appearance and behavior with vast amount of settings or overwrite
              any part of component styles
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value='focus-ring'>
            <Accordion.Control>No annoying focus ring</Accordion.Control>
            <Accordion.Panel>
              With new :focus-visible pseudo-class focus ring appears only when user navigates with
              keyboard
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <h2>Avatar</h2>
        <Group>
          {/* With image */}
          <Avatar
            radius='xl'
            src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
            alt="it's me"
          />

          {/* Default placeholder */}
          <Avatar radius='xl' />

          {/* Letters with xl radius */}
          <Avatar color='cyan' radius='xl'>
            MK
          </Avatar>

          {/* Custom placeholder icon */}
          <Avatar color='blue' radius='sm'>
            <IconStar size='1.5rem' />
          </Avatar>
        </Group>
        <h2>BackgroundImage</h2>
        <Box maw={300}>
          <BackgroundImage
            src='https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'
            radius='sm'
          >
            <Center p='md'>
              <Text color='#fff'>
                BackgroundImage component can be used to add any content on image. It is useful for
                hero headers and other similar sections
              </Text>
            </Center>
          </BackgroundImage>
        </Box>
        <h2>Badge</h2>
        <Group>
          <Badge>Badge</Badge>
          <Badge variant='filled'>Badge</Badge>
          <Badge variant='outline'>Badge</Badge>
          <Badge variant='dot'>Badge</Badge>
        </Group>
        <h2>Card</h2>
        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image
              src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
              height={160}
              alt='Norway'
            />
          </Card.Section>

          <Group position='apart' mt='md' mb='xs'>
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color='pink' variant='light'>
              On Sale
            </Badge>
          </Group>

          <Text size='sm' color='dimmed'>
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
          </Text>

          <Button variant='light' color='blue' fullWidth mt='md' radius='md'>
            Book classic tour now
          </Button>
        </Card>
        <h2>ColorSwatch</h2>
        <Group spacing='xs'>{swatches}</Group>
        <h2>Image</h2>
        <Image maw={240} radius='md' src='https://picsum.photos/800' alt='Random image' />
        <h2>Indicator</h2>
        <Group>
          <Indicator>
            <Avatar
              size='lg'
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
            />
          </Indicator>
        </Group>
        <h2>Kbd</h2>
        <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
        <h2>Spoiler</h2>
        <Spoiler maxHeight={70} showLabel='Show more' hideLabel='Hide'>
          {/* Content here */}
          We Butter the Bread with Butter was founded in 2007 by Marcel Neumann, who was
          originallyguitarist for Martin Kesicis band, and Tobias Schultka. The band was originally
          meant as a joke, but progressed into being a more serious musical duo. The name for the
          band has no particular meaning, although its origins were suggested from when the two
          original members were driving in a car operated by Marcel Neumann and an accident almost
          occurred. Neumann found Schultka so funny that he briefly lost control of the vehicle.
          Many of their songs from this point were covers of German folk tales and nursery rhymes.
        </Spoiler>
        <h2>ThemeIcon</h2>
        <Group>
          {/* filled */}
          <ThemeIcon>
            <IconPhoto />
          </ThemeIcon>
          <ThemeIcon variant='light'>
            <IconPhoto />
          </ThemeIcon>
          <ThemeIcon variant='outline'>
            <IconPhoto />
          </ThemeIcon>
          <ThemeIcon variant='default'>
            <IconPhoto />
          </ThemeIcon>
        </Group>
        <h2>Timeline</h2>
        <Timeline active={1} bulletSize={24} lineWidth={2}>
          <Timeline.Item bullet={<IconGitBranch size={12} />} title='New branch'>
            <Text color='dimmed' size='sm'>
              You&apos;ve created new branch{' '}
              <Text variant='link' component='span' inherit>
                fix-notifications
              </Text>{' '}
              from master
            </Text>
            <Text size='xs' mt={4}>
              2 hours ago
            </Text>
          </Timeline.Item>

          <Timeline.Item bullet={<IconGitCommit size={12} />} title='Commits'>
            <Text color='dimmed' size='sm'>
              You&apos;ve pushed 23 commits to
              <Text variant='link' component='span' inherit>
                fix-notifications branch
              </Text>
            </Text>
            <Text size='xs' mt={4}>
              52 minutes ago
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title='Pull request'
            bullet={<IconGitPullRequest size={12} />}
            lineVariant='dashed'
          >
            <Text color='dimmed' size='sm'>
              You&apos;ve submitted a pull request
              <Text variant='link' component='span' inherit>
                Fix incorrect notification message (#187)
              </Text>
            </Text>
            <Text size='xs' mt={4}>
              34 minutes ago
            </Text>
          </Timeline.Item>

          <Timeline.Item title='Code review' bullet={<IconMessageDots size={12} />}>
            <Text color='dimmed' size='sm'>
              <Text variant='link' component='span' inherit>
                Robert Gluesticker
              </Text>{' '}
              left a code review on your pull request
            </Text>
            <Text size='xs' mt={4}>
              12 minutes ago
            </Text>
          </Timeline.Item>
        </Timeline>
      </Container>
    </>
  )
}
