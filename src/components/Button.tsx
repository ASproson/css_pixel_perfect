interface ButtonProps {
  text: string;
  color: string;
}

export const Button = ({ text, color }: ButtonProps) => {
  return (
    <button
      className="text-gray-100 px-4 py-2 rounded-sm hover:scale-110 transition ease-in-out "
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};
