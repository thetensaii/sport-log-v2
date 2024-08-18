import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { Select } from './ui/select';

type Option = {
  value: string;
  label: string;
};

type Props = {
  name: string;
  label: string;
  options: Option[];
  placeholder?: string;
};

export const SelectInput: React.FC<Props> = ({ name, label, options, placeholder }) => {
  return (
    <Select.Root name={name} items={options}>
      <Select.Label>{label}</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
          <ChevronsUpDownIcon />
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {options.map((o) => (
            <Select.Item key={o.value} item={o}>
              <Select.ItemText>{o.label}</Select.ItemText>
              <Select.ItemIndicator>
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};
