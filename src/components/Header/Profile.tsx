import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

type ProfileProps = {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Pedro</Text>
          <Text color="gray.300" fontSize="small">
            joaomljcanal@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Diego Fernandes" src="https://github.com/joaom00.png" />
    </Flex>
  )
}
