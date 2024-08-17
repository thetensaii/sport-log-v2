import { PlayerProfilePage } from '#/player/profile/ui/PlayerProfilePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/player/_layout/profile')({
  component: () => <div>
    <PlayerProfilePage />
  </div>
})