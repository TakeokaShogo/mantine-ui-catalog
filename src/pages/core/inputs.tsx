import {
  Autocomplete,
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  FileInput,
  Input,
  JsonInput,
  MultiSelect,
  NativeSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  Rating,
  SegmentedControl,
  Select,
  Slider,
  Stack,
  Switch,
  TextInput,
  Textarea,
  Text,
  TransferList,
  TransferListData,
  Container,
} from '@mantine/core'
import { IconAt } from '@tabler/icons-react'
import { useState } from 'react'
import Head from 'next/head'

export default function Page() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)')

  const dataMulti = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
    { value: 'riot', label: 'Riot' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
  ]

  const initialValues: TransferListData = [
    [
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular' },
      { value: 'next', label: 'Next.js' },
      { value: 'blitz', label: 'Blitz.js' },
      { value: 'gatsby', label: 'Gatsby.js' },
      { value: 'vue', label: 'Vue' },
      { value: 'jq', label: 'jQuery' },
    ],
    [
      { value: 'sv', label: 'Svelte' },
      { value: 'rw', label: 'Redwood' },
      { value: 'np', label: 'NumPy' },
      { value: 'dj', label: 'Django' },
      { value: 'fl', label: 'Flask' },
    ],
  ]
  const [data, setData] = useState<TransferListData>(initialValues)

  return (
    <>
      <Head>
        <title>Inputs</title>
      </Head>
      <Container size='xs' px='xs' py='xl'>
        <h2>Autocomplete</h2>
        <Autocomplete
          label='Your favorite framework/library'
          placeholder='Pick one'
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />

        <h2>Checkbox</h2>
        <Checkbox label='I agree to sell my privacy' />

        <h2>Chip</h2>
        <Chip defaultChecked>Awesome chip</Chip>

        <h2>ColorInput</h2>
        <ColorInput placeholder='Pick color' label='Your favorite color' />

        <h2>ColorPicker</h2>
        <Stack>
          <ColorPicker format='rgba' value={value} onChange={onChange} />
          <Text>{value}</Text>
        </Stack>

        <h2>FileInput</h2>
        <FileInput placeholder='Pick file' label='Your resume' withAsterisk />

        <h2>Input</h2>
        <Input icon={<IconAt />} placeholder='Your email' />

        <h2>JsonInput</h2>
        <JsonInput
          label='Your package.json'
          placeholder='Textarea will autosize to fit the content'
          validationError='Invalid JSON'
          formatOnBlur
          autosize
          minRows={4}
        />

        <h2>MultiSelect</h2>
        <MultiSelect
          data={dataMulti}
          label='Your favorite frameworks/libraries'
          placeholder='Pick all that you like'
        />

        <h2>NativeSelect</h2>
        <NativeSelect
          data={['React', 'Vue', 'Angular', 'Svelte']}
          label='Select your favorite framework/library'
          description='This is anonymous'
          withAsterisk
        />

        <h2>NumberInput</h2>
        <NumberInput defaultValue={18} placeholder='Your age' label='Your age' withAsterisk />

        <h2>PasswordInput</h2>
        <PasswordInput
          placeholder='Password'
          label='Password'
          description='Password must include at least one letter, number and special character'
          withAsterisk
        />

        <h2>PinInput</h2>
        <PinInput length={6} />

        <h2>Radio</h2>
        <Radio label='I cannot be unchecked' />

        <h2>Rating</h2>
        <Rating defaultValue={2} />

        <h2>SegmentedControl</h2>
        <SegmentedControl
          data={[
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'ng' },
            { label: 'Vue', value: 'vue' },
            { label: 'Svelte', value: 'svelte' },
          ]}
        />

        <h2>Select</h2>
        <Select
          label='Your favorite framework/library'
          placeholder='Pick one'
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
          ]}
        />

        <h2>Slider</h2>
        <Slider
          marks={[
            { value: 20, label: '20%' },
            { value: 50, label: '50%' },
            { value: 80, label: '80%' },
          ]}
        />

        <h2>Switch</h2>
        <Switch label='I agree to sell my privacy' />

        <h2>Textarea</h2>
        <Textarea placeholder='Your comment' label='Your comment' withAsterisk />

        <h2>TextInput</h2>
        <TextInput placeholder='Your name' label='Full name' withAsterisk />

        <h2>TransferList</h2>
        <TransferList
          value={data}
          onChange={setData}
          searchPlaceholder='Search...'
          nothingFound='Nothing here'
          titles={['Frameworks', 'Libraries']}
          breakpoint='sm'
        />
      </Container>
    </>
  )
}
