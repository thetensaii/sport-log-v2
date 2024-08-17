import { FormLabel } from "#/components/ui/form-label"
import { RadioGroup } from "#/components/ui/radio-group"

type Option = {
  value: string
  label: string
}

type Props = {
  name: string
  label: string
  options : Option[]
}

export const RadioInput:React.FC<Props> = ({ name, label, options }) => {
  return (
    <RadioGroup.Root name={name}>
      <RadioGroup.Label asChild>
        <FormLabel>{label}</FormLabel>
      </RadioGroup.Label>
      {options.map((option) => (
        <RadioGroup.Item key={option.value} value={option.value}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}