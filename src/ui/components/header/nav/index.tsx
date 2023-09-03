import { For } from 'solid-js';
import NavItem from './nav-item';
import Box from '../../box';

const ITEMS = [
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Articles',
    to: '/blog',
  },
  {
    title: 'Projects',
    to: '/projects',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
];

function Nav() {
  return (
    <Box as="nav">
      <Box as="ul" display="flex" spacingX="space-x-2">
        <For each={ITEMS}>
          {({ title, to }) => (
            <NavItem to={to}>{title}</NavItem>
          )}
        </For>
      </Box>
    </Box>
  );
}

export default Nav;
