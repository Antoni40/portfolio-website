const variants = {
  primary: "bg-primary text-white p-4 rounded-lg border-2 border-border hover:bg-primary-hover",
  secondary: "bg-surface text-text-primary border border-border p-4 rounded-lg border-2 border-border hover:bg-background",
  borderless: "bg-transparent text-text-primary hover:text-primary cursor-pointer"
};

type ButtonProps = {
  text: string | "";
  variant: keyof typeof variants;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ text, variant, children, onClick }: ButtonProps) {
  return (
    <button 
      className={`font-bold ${variants[variant]}`}
      onClick={onClick}
    >
      { text.length > 0 ? text : children }
    </button>
  );
}