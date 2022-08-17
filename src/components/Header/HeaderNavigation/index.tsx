import { IconProps } from 'phosphor-react';
import React from 'react';
import styles from './styles.module.scss';

interface HeaderNavigationProps {
  url: string;
  linkTitle: string;
  active?: boolean;
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export function HeaderNavigation({
  url,
  linkTitle,
  active = false,
  icon,
}: HeaderNavigationProps) {
  return (
    <li className={`${styles.listItem} ${active ? styles.active : ''}`}>
      <a href={url}>
        {icon && React.createElement(icon, { size: 20, weight: 'bold' })}
        {linkTitle}
      </a>
    </li>
  );
}
