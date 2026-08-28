import Link from "next/link";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "bg-surface text-text-primary border border-border hover:bg-background"
};

type ButtonLinkProps = {
  href: string;
  text: string;
  variant: keyof typeof variants;
};

export default function ButtonLink({ href, text, variant }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${variants[variant]} rounded-lg p-4 font-bold border-2 border-border`}
    >
      {text}
    </Link>
  );
}