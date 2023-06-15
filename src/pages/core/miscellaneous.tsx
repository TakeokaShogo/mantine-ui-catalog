import {
  Container,
  Box,
  Group,
  Button,
  Collapse,
  Divider,
  FocusTrap,
  TextInput,
  Paper,
  ScrollArea,
  Title,
  Transition,
  Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import Head from 'next/head'

export default function Page() {
  const [openedCollapse, collapseObj] = useDisclosure(true)
  const [active, { toggle }] = useDisclosure(false)
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Head>
        <title>Miscellaneous</title>
      </Head>
      <Container size='xs' px='xs' py='xl'>
        <h2>Box</h2>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            textAlign: 'center',
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: 'pointer',

            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            },
          })}
        >
          Box lets you add inline styles with sx prop
        </Box>

        <h2>Collapse</h2>
        <Box maw={400}>
          <Group mb={5}>
            <Button onClick={collapseObj.toggle}>Toggle content</Button>
          </Group>

          <Collapse in={openedCollapse}>
            <Text>
              From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin
              with darker patches. It has red eyes with white pupils, pointed, ear-like structures
              on top of its head, and a short, blunt snout with a wide mouth. A pair of small,
              pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick
              legs ends with three sharp claws. On Bulbasaurs back is a green plant bulb, which is
              grown from a seed planted there at birth. The bulb also conceals two slender,
              tentacle-like vines and provides it with energy through photosynthesis as well as from
              the nutrient-rich seeds contained within.
            </Text>
          </Collapse>
        </Box>

        <h2>Divider</h2>
        <Divider my='sm' />
        <Divider my='sm' variant='dashed' />
        <Divider my='sm' variant='dotted' />

        <h2>FocusTrap</h2>
        <Box maw={400}>
          <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

          <FocusTrap active={active}>
            <div>
              <TextInput mt='sm' label='First input' placeholder='First input' />
            </div>
          </FocusTrap>
        </Box>

        <h2>Paper</h2>
        <Paper shadow='xs' p='md'>
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that require background
            with shadow
          </Text>
        </Paper>

        <h2>Portal</h2>

        <h2>ScrollArea</h2>
        <ScrollArea h={250}>
          {/* ... content */}
          <Title order={4}>Charizard (Pokémon)</Title>
          <p>Charizard description from Bulbapedia </p>
          Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside
          from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly
          raised nostrils, and two horn-like structures protruding from the back of its rectangular
          head. There are two fangs visible in the upper jaw when its mouth is closed. Two large
          wings with blue-green undersides sprout from its back, and a horn-like appendage juts out
          from the top of the third joint of each wing. A single wing-finger is visible through the
          center of each wing membrane. Charizards arms are short and skinny compared to its robust
          belly, and each limb has three white claws. It has stocky legs with cream-colored soles on
          each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable
          flame. As Mega Charizard X, its body and legs are more physically fit, though its arms
          remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with
          blue tips curve upward from the front and back of each shoulder, while the tips of its
          horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and
          its eyes are now red. It has two small, fin-like spikes under each horn and two more down
          its lower neck. The finger disappears from the wing membrane, and the lower edges are
          divided into large, rounded points. The third joint of each wing-arm is adorned with a
          claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the
          flame on its tail now burns blue. It is said that its new power turns it black and creates
          more intense flames.
        </ScrollArea>

        <h2>Transition</h2>
        <Transition mounted={opened} transition='fade' duration={400} timingFunction='ease'>
          {(styles) => <div style={styles}>Your modal</div>}
        </Transition>
      </Container>
    </>
  )
}
