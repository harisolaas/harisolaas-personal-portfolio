import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { FC } from "react";
import AnimatedClick from "./animated-click";
import { fireflyAnimationFinalPosition } from "../styles/mixins";

type AnimatedLinkProps = {
  current: boolean;
};

const forceFireflyFinalPosition = css`
  > span {
    text-shadow: ${({ theme }) => theme.textShadow};
    ::after {
      ${fireflyAnimationFinalPosition};
    }
  }
`;
const AnimatedLink = styled(AnimatedClick)<AnimatedLinkProps>`
  ${({ current }) => (current ? forceFireflyFinalPosition : "")}
`;

const NavLink: FC<LinkProps> = ({ children, href, ...otherProps }) => {
  const { pathname } = useRouter();
  console.log(href === pathname, href, pathname);

  return (
    <Link href={href} {...otherProps}>
      <a>
        <AnimatedLink current={href === pathname}>{children}</AnimatedLink>
      </a>
    </Link>
  );
};

export default NavLink;
