import { buttonVariants } from "@/data/data";
import type { ButtonProps } from "@/types/types";

export default function Button({
  text,
  variant,
  children,
  onClickHandler,
}: ButtonProps) {
  return (
    <button
      className={`font-semibold ${buttonVariants[variant]} w-fit`}
      onClick={onClickHandler}
    >
      {text}
      {children}
    </button>
  );
}
