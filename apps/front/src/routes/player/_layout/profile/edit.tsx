import { EditPlayerProfilePage } from '#/player/profile/ui/EditCreatePlayerPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/player/_layout/profile/edit')({
  component: () => <EditPlayerProfilePage />
})