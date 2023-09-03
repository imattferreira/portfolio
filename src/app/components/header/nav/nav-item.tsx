import Link from '@/app/components/link';

type NavItemProps = {
  to: string;
  children: string;
}

function NavItem(props: NavItemProps) {
  return (
    <li class="py-1 px-2">
      <Link to={props.to} size="size3" type="secondary">
        {props.children}
      </Link>
    </li>
  )
}

export default NavItem;
