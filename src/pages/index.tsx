import { Container, Space, Text, Title } from '@mantine/core'
import Link from 'next/link'

export default function Demo() {
  return (
    <>
      <Container size='xs' px='xs' py='xl'>
        <Title>Mantine UI Catalog</Title>
        <Space h='md'></Space>
        <Text>
          <Link href='/core/buttons'>Buttons</Link>
        </Text>
        <Text>
          <Link href='/core/data-display'>Data Display</Link>
        </Text>
        <Text>
          <Link href='/core/feedback'>Feedback</Link>
        </Text>
        <Text>
          <Link href='/core/inputs'>Inputs</Link>
        </Text>
        <Text>
          <Link href='/core/miscellaneous'>Miscellaneous</Link>
        </Text>
        <Text>
          <Link href='/core/navigation'>Navigation</Link>
        </Text>
        <Text>
          <Link href='/core/overlays'>Overlays</Link>
        </Text>
        <Text>
          <Link href='/core/typography'>Typography</Link>
        </Text>
      </Container>
    </>
  )
}
