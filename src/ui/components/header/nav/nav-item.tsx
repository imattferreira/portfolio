import Link from "@/ui/components/link";
import Box from "../../box";

type NavItemProps = {
  to: string;
  children: string;
};

function NavItem(props: NavItemProps) {
  return (
    <Box as="li" py="py-1" px="px-2">
      <Link to={props.to} size="size3" type="secondary">
        {props.children}
      </Link>
    </Box>
  );
}

export default NavItem;
