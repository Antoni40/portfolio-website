import Link from "next/link";
import { buttonLinkVariants } from "@/data/data";
import type { ButtonLinkProps } from "@/types/types";

export default function ButtonLink({
  href,
  text,
  variant,
  children,
  rel,
  target,
  onClickHandler,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${buttonLinkVariants[variant]} w-fit`}
      onClick={onClickHandler}
      rel={rel}
      target={target}
    >
      {text}
      {children}
    </Link>
  );
}
