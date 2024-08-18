import { Link as UILink } from '#/components/ui/link';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from '@tanstack/react-router';
import React from 'react';
import { css } from 'styled-system/css';

type Props = React.PropsWithChildren<{
  to: RouterLinkProps['to'];
}>;

export const NavigationLink: React.FC<Props> = ({ to, children }) => {
  return (
    <UILink asChild>
      <RouterLink
        to={to}
        activeProps={{ className: css({ fontWeight: 'bold' }) }}
        inactiveProps={{ className: css({ fontWeight: 'normal' }) }}
      >
        {children}
      </RouterLink>
    </UILink>
  );
};
