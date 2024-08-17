import { Button } from "#/components/ui/button"
import { Text } from "#/components/ui/text"
import { css } from "styled-system/css"
import { Container, Grid } from "styled-system/jsx"

export const PlayerProfilePage = () => {
  return (
    <Container maxWidth="4xl">
      <Text as="p" size="2xl">Charles DUPONT</Text>

      <Text as="h2" size="xl" fontWeight="semibold">Informations Personelles</Text>
      <Grid columns={2}>
        <Text>Homme</Text>
        <Text>21ans (15/5/2003)</Text>
      </Grid>

      <Text as="h2" size="xl" fontWeight="semibold">Informations Sportives</Text>
      <Grid columns={2}>
        <Text>Taille: 185cm</Text>
        <Text>Meneur, Arrière</Text>
        <Text className={css({ opacity: 0.7, fontStyle: "italic" })}>Division:</Text>
        <Text className={css({ opacity: 0.7, fontStyle: "italic" })}>Club actuel:</Text>
        <Text className={css({ opacity: 0.7, fontStyle: "italic" })}>CV Sportif:</Text>
        <Text className={css({ opacity: 0.7, fontStyle: "italic" })}>CV Professionnel:</Text>
        <Text className={css({ opacity: 0.7, fontStyle: "italic" })}>Vidéo Highlights:</Text>
        <Text className={css({ opacity: 0.7, fontStyle: "italic" })}>Vidéo Présentation:</Text>
        <Text className={css({ opacity: 0.7, fontStyle: "italic" })}>Profil Proballers:</Text>
      </Grid>
      <Button>Modifier Profil</Button>
    </Container>
  )
}