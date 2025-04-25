import React from "react";

function App() {
   return (
      <>
         <div className="flex flex-col  w-130 h-100 items-center justify-center">
            <h1 className="text-6xl font-bold">Cadastro</h1>
            <p className="text-zinc-700 text-xl mt-3">
               Preencha seus dados para criar sua conta
            </p>
            <div className="flex flex-col gap-4 mt-6 ">
               <span className=" absolute bg-white ml-4 px-2 text-xl">
                  Nome de usuário
               </span>
               <label>
                  <input
                     type="text"
                     className="border-zinc-300 border-1 bg-white rounded-md w-130 p-3 mt-3"
                  />
               </label>
               <label>
                  <span className=" absolute bg-white ml-4 px-2 text-xl">
                     E-mail
                  </span>
                  <input
                     type="email"
                     className="border-zinc-300 border-1 bg-white rounded-md w-130 p-3 mt-3"
                  />
               </label>
               <label>
                  <span className=" absolute bg-white ml-4 px-2 text-xl">
                     Senha
                  </span>
                  <input
                     type="password"
                     className="border-zinc-300 border-1 bg-white rounded-md w-130 p-3 mt-3"
                  />
               </label>
               <label>
                  <span className=" absolute bg-white ml-4 px-2 text-xl">
                     Telefone
                  </span>
                  <input
                     type="text"
                     placeholder="(99) 99999-9999"
                     maxLength={11}
                     className="border-zinc-300 border-1 bg-white rounded-md w-130 p-3 mt-3 text-xl"
                  />
               </label>
               <button className="bg-black rounded-md p-3 text-2xl text-white cursor-pointer">
                  Criar conta
               </button>
            </div>
         </div>
      </>
   );
}

export default App;
