import { css } from "styled-system/css"
import { NavigationLink } from "./atom/NavigationLink"
import { Text } from "#/components/ui/text"

export const NavigationHeader = () => {
  return <nav >
    <ul className={css({ display:"flex", justifyContent: "center", gap: 8})}>
      <NavigationLink to="/player/home">
        <Text size="xl">Accueil</Text>
      </NavigationLink>
      <NavigationLink to="/create/player">
        <Text size="xl">Profil</Text>
      </NavigationLink>
    </ul>
  </nav>
}