
import { Text } from "#/components/ui/text"
import { Container } from "styled-system/jsx"
import { Link } from "./atom/Link"

export const PlayerHomePage = () => {
  return (
    <Container maxWidth="4xl" display="flex" flexDirection="column" gap={4}>
      <Text as="h2" size="3xl" fontWeight="bold">Votre Profil a bien été créé !</Text>
      <Text as="p">Mais il nous manque quelques informations pour pouvoir 
      le rendre visible par des coachs !</Text>
      <Text as="p">Allez sur votre <Link to='/player/profile'>profil</Link> ajouter ces informations !</Text>
    </Container>
  )
}