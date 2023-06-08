import {
  Container,
  Blockquote,
  Code,
  Highlight,
  List,
  Mark,
  Table,
  Title,
  TypographyStylesProvider,
  Text,
} from '@mantine/core'

export default function Demo() {
  const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ]
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ))

  return (
    <Container size='xs' px='xs' py='xl'>
      <h2>Blockquote</h2>
      <Blockquote cite='– Forrest Gump'>
        Life is like an npm install – you never know what you are going to get.
      </Blockquote>

      <h2>Code</h2>
      <Code>React.createElement()</Code>

      <h2>Highlight</h2>
      <Highlight highlight='this'>Highlight This, definitely THIS and also this!</Highlight>

      <h2>List</h2>
      <List>
        <List.Item>Clone or download repository from GitHub</List.Item>
        <List.Item>Install dependencies with yarn</List.Item>
        <List.Item>To start development server run npm start command</List.Item>
        <List.Item>Run tests to make sure your changes do not break the build</List.Item>
        <List.Item>Submit a pull request once you are done</List.Item>
      </List>

      <h2>Mark</h2>
      <Text>
        Thanks for stopping by and checking out <Mark>Mantine</Mark>, you are awesome!
      </Text>

      <h2>Table</h2>
      <Table>
        <thead>
          <tr>
            <th>Element position</th>
            <th>Element name</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      <h2>Text</h2>
      <Text fz='xs'>Extra small text</Text>
      <Text fz='sm'>Small text</Text>
      <Text fz='md'>Default text</Text>
      <Text fz='lg'>Large text</Text>
      <Text fz='xl'>Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs='italic'>Italic</Text>
      <Text td='underline'>Underlined</Text>
      <Text td='line-through'>Strikethrough</Text>
      <Text c='dimmed'>Dimmed text</Text>
      <Text c='blue'>Blue text</Text>
      <Text c='teal.4'>Teal 4 text</Text>
      <Text tt='uppercase'>Uppercase</Text>
      <Text tt='capitalize'>capitalized text</Text>
      <Text ta='center'>Aligned to center</Text>
      <Text ta='right'>Aligned to right</Text>

      <h2>Title</h2>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>

      <h2>TypographyStylesProvider</h2>
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: '<p>Your html here</p>' }} />
      </TypographyStylesProvider>
    </Container>
  )
}
