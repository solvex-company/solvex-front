import RegisterForm from "./components/RegisterForm";

const Register: React.FC = () => {
    return(
        <>
          <div className="flex flex-col h-[calc(100vh)-100px] overflow-y-auto m-4 p-4 pl-12 pr-12">
            <span className="mb-3 text-center text-[24px]">Crea una cuenta</span>
            <RegisterForm/>
          </div>
        </>
    )
}

export default Register;