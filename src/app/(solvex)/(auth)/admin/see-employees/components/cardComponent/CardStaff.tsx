import cardProps from "./types/index";

const CardStaff: React.FC<{
  user: cardProps;
  children: React.ReactNode;
}> = ({ user, children }) => {
  return (
    <div className="w-[240px] h-[150px] flex flex-col gap-2 border-2 px-5 py-4 rounded-lg border-accent shadow-xl">
      <h4 className="">*{user.name}</h4>
      <p className="mb-1">{user.email}</p>
      {children}
    </div>
  );
};

export default CardStaff;
