import { ElementType } from 'react'
import {
  Link,
  Icon,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

type NavLinkProps = {
  icon: ElementType
  children: string
} & ChakraLinkProps

export function NavLink({ icon, children, ...props }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...props}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
