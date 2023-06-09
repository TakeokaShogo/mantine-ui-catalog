import { AppShell, Navbar, Header, Footer, Aside } from '@mantine/core'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Appshell</title>
      </Head>
      <AppShell
        padding='md'
        navbar={
          <Navbar width={{ base: 300 }} height={500} p='xs' sx={{ backgroundColor: 'pink' }}>
            {
              /* Navbar content */
              'Navbar'
            }
          </Navbar>
        }
        header={
          <Header height={60} p='xs' sx={{ backgroundColor: 'lightblue' }}>
            {'Header'}
          </Header>
        }
        footer={
          <Footer height={70} sx={{ backgroundColor: 'yellow' }}>
            {'Footer'}
          </Footer>
        }
        aside={
          <Aside width={{ base: 300 }} height={500} p='xs' sx={{ backgroundColor: 'lightgreen' }}>
            {'Aside'}
          </Aside>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        {'content'}
      </AppShell>
    </>
  )
}
