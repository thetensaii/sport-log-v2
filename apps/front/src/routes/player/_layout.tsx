import { NavigationHeader } from '#/player/ui/NavigationHeader';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/player/_layout')({
  component: () => (
    <div>
      <NavigationHeader />
      <Outlet />
    </div>
  ),
});
