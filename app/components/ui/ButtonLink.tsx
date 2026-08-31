import Link from "next/link";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover rounded-lg p-4 border border-border font-semibold",
  secondary:
    "bg-surface text-text-primary border border-border hover:bg-background  rounded-lg p-4 border border-border font-semibold",
  text: "bg-transparent text-text-primary hover:text-primary font-semibold",
  brand: "bg-transparent text-text-primary hover:text-primary font-bold text-2xl"
};

type ButtonLinkProps = {
  href: string;
  text: string;
  variant: keyof typeof variants;
  onClickHandler?: () => void;
};

export default function ButtonLink({ href, text, variant, onClickHandler }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${variants[variant]}`} onClick={onClickHandler}>
      {text}
    </Link>
  );
}
