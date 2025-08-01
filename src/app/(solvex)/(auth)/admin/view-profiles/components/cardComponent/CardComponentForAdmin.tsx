import { UserDto } from "@/dto/userDto";

const CardComponentForAdmin: React.FC<{
  user: UserDto;
  children: React.ReactNode;
}> = ({ user, children }) => {
  return (
    <div className="w-[240px] h-[150px] flex justify-center flex-col gap-2 border-2 px-5 py-1 rounded-lg border-accent shadow-xl">
      <h4 className="">
        *{user.name} {user.lastname}
      </h4>
      <p className="mb-1 text-sm">{user.credentials.email}</p>
      {children}
    </div>
  );
};

export default CardComponentForAdmin;
