import { Text } from "#/components/ui/text"
import { Container, Grid } from "styled-system/jsx"
import { TextInput } from "../atom/TextInput"
import { DateInput } from "../atom/DateInput"
import { RadioInput } from "../atom/RadioInput"
import { CheckboxInput } from "../atom/CheckboxInput"
import { Button } from "#/components/ui/button"
import { css } from "styled-system/css"
import { Link } from "@tanstack/react-router"

export const CreatePlayer = () => {
  return (
    <Container maxWidth="3xl" height="lvh" marginTop={12}>
      <Text as="h2" size="4xl" className={css({marginBottom: 12})}>
        Nous avons besoin d’informations 
        pour créer votre profil
      </Text>
      <form>
        <Grid columns={2} gap={8}>
          <TextInput name="lastname" label="Nom"  />
          <TextInput name="firstname" label="Prénom"  />
          <DateInput name="birthdate" label="Date de naissance" />
          <RadioInput name="gender" label="Sexe" options={[{value: "man", label: "Homme"}, {value: "woman", label: "Femme"}]}/>
          <TextInput type="number" name="height" label="Taille (en cm)" />
          <CheckboxInput  label="Poste(s)" options={[
              {label: "Meneur", value: "1"},
              {label: "Arrière", value: "2"},
              {label: "Ailier", value: "3"},
              {label: "Ailier-Fort", value: "4"},
              {label: "Pivot", value: "5"},
            ]}
          />
        </Grid>
        <Button asChild>
          <Link to="/player/home">Créer mon profil</Link>
        </Button>
      </form>
    </Container>
  )
}