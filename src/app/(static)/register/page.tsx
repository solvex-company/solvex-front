import RegisterForm from "./components/RegisterForm";

const Register: React.FC = () => {
    return(
        <>
           <span className="text-[24px]">Crea una cuenta</span>
           <span className="pt-3 pb-4 text-[16px]">Ingresa tu correo electrónico para registrarte en esta app</span>
           <RegisterForm/>
        </>
    )
}

export default Register;