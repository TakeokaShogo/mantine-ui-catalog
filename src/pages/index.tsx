import { Container, Space, Button, Title, Text, Group, Box, Stack } from '@mantine/core'
import LinkButton from '@/components/LinkButton'

export default function Demo() {
  return (
    <>
      <Container size='xs' px='xs' py='xl'>
        <Title color='blue.5'>Mantine UI Catalog</Title>
        <Space h='md'></Space>
        <Stack spacing={0} align='flex-start'>
          <LinkButton href='/core/layout'>Layout</LinkButton>
          <Group>
            <Box ml='1rem'>|--</Box>
            <LinkButton href='/core/layout/appshell'>AppShell</LinkButton>
          </Group>
          <LinkButton href='/core/buttons'>Buttons</LinkButton>
          <LinkButton href='/core/inputs'>Inputs</LinkButton>
          <LinkButton href='/core/navigation'>Navigation</LinkButton>
          <LinkButton href='/core/data-display'>Data Display</LinkButton>
          <LinkButton href='/core/overlays'>Overlays</LinkButton>
          <LinkButton href='/core/typography'>Typography</LinkButton>
          <LinkButton href='/core/feedback'>Feedback</LinkButton>
          <LinkButton href='/core/miscellaneous'>Miscellaneous</LinkButton>
        </Stack>
      </Container>
    </>
  )
}
