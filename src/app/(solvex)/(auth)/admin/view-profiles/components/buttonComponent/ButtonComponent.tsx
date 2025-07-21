type buttonFunction = {
  handleClick: () => void;
  children: string;
  disabled: boolean;
};

const ButtonComponent: React.FC<buttonFunction> = ({
  handleClick,
  children,
}) => {
  return (
    <button
      className="bg-gray-400 hover:bg-accent hover:shadow-md px-4 py-2 rounded transition-bg duration-300"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
