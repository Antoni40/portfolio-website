const variants = {
  primary:
    "bg-primary text-white p-4 rounded-lg border border-border hover:bg-primary-hover",
  secondary:
    "bg-surface text-text-primary border border-border p-4 rounded-lg border border-border hover:bg-background",
  borderless:
    "bg-transparent text-text-primary hover:text-primary cursor-pointer",
};

type ButtonProps = {
  text?: string;
  variant: keyof typeof variants;
  children?: React.ReactNode;
  onClickHandler?: () => void;
};

export default function Button({
  text,
  variant,
  children,
  onClickHandler,
}: ButtonProps) {
  return (
    <button
      className={`font-semibold ${variants[variant]}`}
      onClick={onClickHandler}
    >
      {text === null ? text : children}
    </button>
  );
}
