import {
  AspectRatio,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  MediaQuery,
  SimpleGrid,
  Space,
  Stack,
  rem,
  Text,
} from '@mantine/core'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Layout</title>
      </Head>
      <Container size='xs' px='xs' py='xl'>
        <h2>AspectRatio</h2>
        <AspectRatio ratio={720 / 1080} maw={300} mx='auto'>
          <Image
            src='https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'
            alt='Panda'
          />
        </AspectRatio>
        <h2>Center</h2>
        <Center maw={400} h={100} mx='auto'>
          <div>All elements inside Center are centered</div>
        </Center>
        <h2>Container</h2>

        <Container>Default container</Container>
        <Container size='xs' px='xs'>
          xs container with xs horizontal padding
        </Container>
        <Container size='30rem' px={0}>
          30rem container with 0 horizontal padding
        </Container>
        <h2>Flex</h2>
        <Flex
          mih={50}
          bg='rgba(0, 0, 0, .3)'
          gap='md'
          justify='flex-start'
          align='flex-start'
          direction='row'
          wrap='wrap'
        >
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </Flex>
        <h2>Grid</h2>
        <Grid>
          <Grid.Col span={4}>1</Grid.Col>
          <Grid.Col span={4}>2</Grid.Col>
          <Grid.Col span={4}>3</Grid.Col>
        </Grid>
        <h2>Group</h2>
        <Group>
          <Button variant='outline'>1</Button>
          <Button variant='outline'>2</Button>
          <Button variant='outline'>3</Button>
        </Group>
        <h2>MediaQuery</h2>
        <MediaQuery
          query='(max-width: 75em) and (min-width: 50em)'
          styles={{ fontSize: rem(20), '&:hover': { backgroundColor: 'silver' } }}
        >
          <Text>(max-width: 75em) and (min-width: 50em) breakpoints</Text>
        </MediaQuery>
        <h2>SimpleGrid</h2>
        <SimpleGrid cols={3}>
          <div style={{ backgroundColor: 'lightblue' }}>1</div>
          <div style={{ backgroundColor: 'lightblue' }}>2</div>
          <div style={{ backgroundColor: 'lightblue' }}>3</div>
          <div style={{ backgroundColor: 'lightblue' }}>4</div>
          <div style={{ backgroundColor: 'lightblue' }}>5</div>
        </SimpleGrid>
        <h2>Space</h2>
        <Text>First line</Text>
        {/* 0 width */}
        <Space h='md' />
        <Text>Second line</Text>
        <h2>Stack</h2>
        <Stack
          h={300}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          })}
        >
          <Button variant='outline'>1</Button>
          <Button variant='outline'>2</Button>
          <Button variant='outline'>3</Button>
        </Stack>
      </Container>
    </>
  )
}
