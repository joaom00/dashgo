import { forwardRef } from 'react'
import { Input, FormLabel, FormControl, InputProps, FormErrorMessage } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

type TextFieldProps = {
  name: string
  label?: string
  error?: FieldError
} & InputProps

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ name, label, error = null, ...props }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
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
          ref={ref}
          {...props}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    )
  }
)
