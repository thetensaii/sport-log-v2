import { Button } from '#/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Container } from 'styled-system/jsx'

export const Route = createFileRoute('/(auth)/create/')({
  component: () => 
  <Container>
    <Button asChild>
      <Link to='/create/player'>Vous êtes un joueur</Link>
    </Button>
    <Button asChild>
      <Link to='/'>Vous êtes un coach</Link>
    </Button>
  </Container>
})