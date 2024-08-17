import { DateInput } from "#/components/DateInput"
import { RadioInput } from "#/components/RadioInput"
import { TextInput } from "#/components/TextInput"
import { Button } from "#/components/ui/button"
import { Grid } from "styled-system/jsx"

export const PlayerProfilePersonalForm = () => {
  return (
    <form>
      <Grid columns={2} gap={8}>
        <TextInput name='lastname' label='Nom' />
        <TextInput name='firstname' label='Prénom' />
        <DateInput name="birthdate" label="Date de naissance" />
        <RadioInput name="gender" label="Sexe" options={[{value: "man", label: "Homme"}, {value: "woman", label: "Femme"}]}/>
        <TextInput type="tel" name="phonenumber" label="Numéro de téléphone" />
      </Grid>

      <Button type='button'>Enregistrer</Button>
    </form>
  )
}