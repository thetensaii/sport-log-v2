import { Checkbox } from '#/components/ui/checkbox';
import { FormLabel } from '#/components/ui/form-label';

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  options: Option[];
};

export const CheckboxInput: React.FC<Props> = ({ label, options }) => {
  return (
    <div>
      <FormLabel>{label}</FormLabel>
      {options.map((o) => (
        <Checkbox key={o.value} value={o.value} name={o.label}>
          {o.label}
        </Checkbox>
      ))}
    </div>
  );
};
