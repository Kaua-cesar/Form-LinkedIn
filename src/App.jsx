import React from "react";
import { useForm } from "react-hook-form";

function App() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      console.log(data);
   };

   const validateEmail = (value) => {
      const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regex.test(value) ? true : "Email inválido";
   };

   const validatePassword = (value) => {
      const regex = /(?=.*\d)+(?=.*[a-z])+(?=.*[A-Z])/;
      return regex.test(value)
         ? true
         : "Senha inválida, a senha deve conter: Uma letra maiúscula, uma letra minúscula e um número";
   };
   const ErrorMessage = ({ message }) => (
      <p className="text-red-500">{message}</p>
   );
   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col  w-130 h-100 items-center justify-center">
               <h1 className="text-6xl font-bold">Cadastro</h1>
               <p className="text-zinc-700 text-xl mt-3">
                  Preencha seus dados para criar sua conta
               </p>
               <div className="flex flex-col gap-4 mt-6 ">
                  <label>
                     <span className=" absolute bg-white ml-4 px-2 text-xl">
                        Nome de usuário
                     </span>
                     <input
                        {...register("nome", {
                           required: "O nome é obrigatório",
                        })}
                        className="border-zinc-300 border-1 bg-white rounded-md w-130 p-3 mt-3"
                     />
                     {errors.nome && (
                        <ErrorMessage message={errors.nome.message} />
                     )}
                  </label>
                  <label>
                     <span className=" absolute bg-white ml-4 px-2 text-xl">
                        E-mail
                     </span>
                     <input
                        {...register("email", {
                           required: "O email é obrigatório",
                           validate: validateEmail,
                        })}
                        className="border-zinc-300 border-1 bg-white rounded-md w-130 p-3 mt-3"
                     />
                     {errors.email && (
                        <ErrorMessage message={errors.email.message} />
                     )}
                  </label>
                  <label>
                     <span className=" absolute bg-white ml-4 px-2 text-xl">
                        Senha
                     </span>
                     <input
                        {...register("password", {
                           required: "A senha é obrigatória",
                           validate: validatePassword,
                        })}
                        type="password"
                        className="border-zinc-300 border-1 bg-white rounded-md w-130 p-3 mt-3"
                     />
                     {errors.password && (
                        <ErrorMessage message={errors.password.message} />
                     )}
                  </label>
                  <label>
                     <span className=" absolute bg-white ml-4 px-2 text-xl">
                        Telefone
                     </span>
                     <input
                        {...register("number", {
                           required: "O numero é obrigatório",
                           minLength: {
                              value: 11,
                              message:
                                 "O número deve ter exatamente 11 caracteres",
                           },
                        })}
                        inputMode="tel"
                        placeholder="(99) 99999-9999"
                        className="border-zinc-300 border-1 bg-white rounded-md w-130 p-3 mt-3 text-xl"
                     />
                     {errors.number && (
                        <ErrorMessage message={errors.number.message} />
                     )}
                  </label>
                  <button
                     type="submit"
                     className="bg-black rounded-md p-3 text-2xl text-white cursor-pointer"
                  >
                     Criar conta
                  </button>
               </div>
            </div>
         </form>
      </>
   );
}

export default App;
