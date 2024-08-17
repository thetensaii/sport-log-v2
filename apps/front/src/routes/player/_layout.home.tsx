import { PlayerHome } from '#/player/ui/PlayerHome'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/player/_layout/home')({
  component: () => <div>
    <PlayerHome />
  </div>
})