import { Link as UILink } from '#/components/ui/link';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from '@tanstack/react-router';
import React from 'react';

type Props = React.PropsWithChildren<{
  to: RouterLinkProps['to'];
}>;

export const Link: React.FC<Props> = ({ to, children }) => {
  return (
    <UILink asChild>
      <RouterLink to={to}>{children}</RouterLink>
    </UILink>
  );
};
