import { FormLabel } from "#/components/ui/form-label"
import { Input, InputProps } from "#/components/ui/input"
import React from "react"
import { Stack } from "styled-system/jsx"

type Props = {
  name: string,
  label: string,
  value?: string,
  placeholder?: string
  type?: InputProps["type"]
}

export const TextInput: React.FC<Props> = ({ name, label, value, placeholder, type }) => {
  return (
    <Stack gap="1.5">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input type={type} id={name} name={name} placeholder={placeholder} value={value}/>
    </Stack>
  )
}