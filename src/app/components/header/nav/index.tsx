import { For } from "solid-js"
import NavItem from "./nav-item"

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
]

function Nav() {
  return (
    <nav>
      <ul class="flex space-x-2">
        <For each={ITEMS}>
          {({ title, to }) => (
            <NavItem to={to}>{title}</NavItem>
          )}
        </For>
      </ul>
    </nav>
  )
}

export default Nav;
