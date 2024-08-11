import { createFileRoute } from '@tanstack/react-router'
import { css } from '../../styled-system/css'
import { Button } from '#/components/ui/button'

export const Route = createFileRoute('/')({
  component: () => 
    <div>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
      <Button>Ok</Button>
    </div>
})