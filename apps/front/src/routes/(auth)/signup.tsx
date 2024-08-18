import { Button } from '#/components/ui/button';
import { Heading } from '#/components/ui/heading';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Container } from 'styled-system/jsx';

export const Route = createFileRoute('/(auth)/signup')({
  component: () => (
    <Container>
      <Heading as="h1" size="3xl" textTransform="uppercase">
        Bienvenu chez SportLog
      </Heading>
      <Button asChild>
        <Link to="/create">S'inscrire avec Google</Link>
      </Button>
    </Container>
  ),
});
