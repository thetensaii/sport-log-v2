import { CreatePlayer } from '#/auth/ui/organism/CreatePlayer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/create/player')({
  component: () => <CreatePlayer />
})