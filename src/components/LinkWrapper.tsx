interface LinkWrapperProps {
  link: string;
  text: string;
}

export const LinkWrapper = ({ link, text }: LinkWrapperProps) => {
  return (
    <a href={link} className="hover:underline text-blue-500" target="_blank">
      {text}
    </a>
  );
};
