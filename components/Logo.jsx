import { Image, Link } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBoxWrapper = styled.span`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {

  return (
        <LogoBoxWrapper>
          <Link href="/">
          <Image
            src="/images/android-chrome-192x192.png"
            width={30}
            height={30}
            alt="logo"
            mr={2}
          />
          </Link>
        </LogoBoxWrapper>
  )
}

export default Logo
