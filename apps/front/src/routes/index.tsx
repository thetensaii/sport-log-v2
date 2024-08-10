import { createFileRoute } from '@tanstack/react-router'
import { css } from '../../styled-system/css'

export const Route = createFileRoute('/')({
  component: () => <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
})