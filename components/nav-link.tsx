import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import AnimatedClick from "./animated-click";
import { fireflyAnimationFinalPosition } from "../styles/mixins";

const forceFireflyFinalPosition = css`
  > span {
    text-shadow: ${({ theme }) => theme.textShadow};
    ::after {
      ${fireflyAnimationFinalPosition};
    }
  }
`;
interface AnimatedLinkProps {
  current: boolean;
}
const AnimatedLink = styled(AnimatedClick)<AnimatedLinkProps>`
  ${({ current }) => (current ? forceFireflyFinalPosition : "")}
`;

type NavLinkProps = { onClick: () => void } & LinkProps;
const NavLink: React.FC<NavLinkProps> = ({
  children,
  href,
  onClick,
  ...otherProps
}) => {
  const { pathname } = useRouter();

  return (
    <Link href={href} passHref {...otherProps}>
      <a onClick={onClick}>
        <AnimatedLink current={href === pathname}>{children}</AnimatedLink>
      </a>
    </Link>
  );
};

export default NavLink;
