import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>João Pedro</Text>
        <Text color="gray.300" fontSize="small">
          joaomljcanal@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Diego Fernandes"
        src="https://github.com/joaom00.png"
      />
    </Flex>
  )
}
