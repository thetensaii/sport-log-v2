import { CreatePlayerPage } from '#/auth/ui/organism/CreatePlayerPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/create/player')({
  component: () => <CreatePlayerPage />,
});
