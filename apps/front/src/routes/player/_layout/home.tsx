import { PlayerHomePage } from '#/player/ui/PlayerHomePage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/player/_layout/home')({
  component: () => <PlayerHomePage />,
});
