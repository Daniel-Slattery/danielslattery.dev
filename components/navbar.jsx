import { Box, Link, Stack, Flex, Spacer } from '@chakra-ui/react'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const Navbar = () => {
  return (
    <Box
      position="fixed"
      p={2}
      as="nav"
      w="100%"
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <Flex>
        <Spacer />
        <Logo />
        <Spacer />
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: '50%', md: '50%' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link href="#">Projects</Link>
          <Spacer />
          <Link href="#">Posts</Link>
          <Spacer />
          <Link
            _target="_blank"
            href="https://github.com/Daniel-Slattery"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </Link>
          <Spacer />
          <ThemeToggleButton />
          <Spacer />
        </Stack>
      </Flex>
    </Box>
  )
}

export default Navbar
