import { Input, FormLabel, FormControl, InputProps } from '@chakra-ui/react'

type TextFieldProps = {
  name: string
  label?: string
} & InputProps

export function TextField({ name, label, ...props }: TextFieldProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Input
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900'
        }}
        {...props}
      />
    </FormControl>
  )
}
