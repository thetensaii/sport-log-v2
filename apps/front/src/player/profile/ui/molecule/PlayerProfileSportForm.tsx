import { CheckboxInput } from "#/components/CheckboxInput"
import { SelectInput } from "#/components/SelectInput"
import { TextInput } from "#/components/TextInput"
import { Button } from "#/components/ui/button"
import { Grid } from "styled-system/jsx"

export const PlayerProfileSportForm = () => {
  return (
    <form>
      <Grid columns={2} gap={8}>
        <TextInput type="number" name="height" label="Taille (en cm)" />
        <CheckboxInput  label="Poste(s)" options={[
            {label: "Meneur", value: "1"},
            {label: "Arrière", value: "2"},
            {label: "Ailier", value: "3"},
            {label: "Ailier-Fort", value: "4"},
            {label: "Pivot", value: "5"},
          ]}
        />
        <SelectInput name='division' label="Division" options={[
            { value: 'pro-a', label: 'Pro A'},
            { value: 'pro-b', label: 'Pro B'},
            { value: 'n1', label: 'N1'},
            { value: 'n2', label: 'N2'},
            { value: 'n3', label: 'N3'},
          ]} 
        />
        <TextInput name="club" label="Club Actuel" />
        <TextInput type="url" name="sport-resume" label="Lien CV Sportif" />
        <TextInput type="url" name="pro-resume" label="Lien CV Professionnel" />
        <TextInput type="url" name="highlight-video" label="Lien Vidéo Highlights" />
        <TextInput type="url" name="presentation-video" label="Lien Vidéo Présentation" />
        <TextInput type="url" name="proballers-profile" label="Lien profil Proballers " />
      </Grid>

      <Button type='button'>Enregistrer</Button>
    </form>
  )
}