import { PlayerProfile } from '#/player/profile/ui/PlayerProfile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/player/_layout/profile')({
  component: () => <div>
    <PlayerProfile />
  </div>
})