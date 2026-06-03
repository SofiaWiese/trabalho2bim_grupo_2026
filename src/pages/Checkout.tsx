import { useState } from "react";
import { useStore } from "../hooks/useStore";


export default function Checkout() {
  const { cart } = useStore();
  function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
  }
  const [form, setForm] = useState({
    email: "",
    nome: "",
    sobrenome: "",
    telefone: "",
    cep: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    numero: "",
    complemento: "",
    cpf: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    for (const key in form) {
      if (!form[key as keyof typeof form]) {
        alert("Preencha todos os campos");
        return;
      }
    }

    alert("Pedido finalizado");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-sm text-gray-800">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 p-6">
        <div className="lg:col-span-2">
          <p className="mb-2">Dados de contato</p>

          <input
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 mb-3 bg-white rounded "
          />

          <div className="p-5">
            <p className="mb-2 p-2">Dados para entrega</p>

            <div className="grid grid-cols-2 gap-3">
              <input
                name="nome"
                placeholder="Nome"
                onChange={handleChange}
                className="border p-3 bg-white rounded "
              />

              <input
                name="sobrenome"
                placeholder="Sobrenome"
                onChange={handleChange}
                className="border p-3 bg-white rounded "
              />
            </div>

            <input
              name="telefone"
              placeholder="Telefone com DDD"
              onChange={handleChange}
              className="w-full border p-3 mt-3 bg-white rounded "
            />

            <input
              name="cep"
              placeholder="CEP"
              onChange={handleChange}
              className="w-full border p-3 mt-3 bg-white rounded "
            />

            <input
              name="endereco"
              placeholder="Endereço"
              onChange={handleChange}
              className="w-full border p-3 mt-3 bg-white rounded "
            />

            <input
              name="bairro"
              placeholder="Bairro"
              onChange={handleChange}
              className="w-full border p-3 mt-3 bg-white rounded "
            />

            <div className="flex gap-3 mt-3">
              <input
                name="cidade"
                placeholder="Cidade"
                onChange={handleChange}
                className="border p-3 w-1/2 bg-white rounded "
              />

              <input
                name="estado"
                placeholder="Estado"
                onChange={handleChange}
                className="border p-3 w-1/2 bg-white rounded "
              />
            </div>

            <div className="flex gap-3 mt-3">
              <input
                name="numero"
                placeholder="Número"
                onChange={handleChange}
                className="border p-3 w-1/2 bg-white rounded "
              />

              <input
                name="complemento"
                placeholder="Complemento"
                onChange={handleChange}
                className="border p-3 w-1/2 bg-white rounded "
              />
            </div>
          </div>

          <div className="p-5">
            <p className="mt-6 mb-2 m-2 rounded ">Dados para nota fiscal</p>

            <input
              name="cpf"
              placeholder="CPF ou CNPJ"
              onChange={handleChange}
              className="w-full border p-3 mb-3 bg-white rounded "
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-black text-white px-6 py-3 w-full md:w-auto rounded "
          >
            Concluir a compra
          </button>
        </div>

        <div className="bg-[#f0f0f0] p-6 h-fit">
          {cart.map((item, indice) => (
            <div className="flex gap-4 mb-4">
              <div>
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
              </div>

              <div>
                <p>{item.title}</p>
                <div className="flex gap-2"></div>
              </div>
              <span className="ml-auto">R${item.price},00</span>
            </div>
          ))}

          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>R${calculateTotal()},00</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Frete</span>
            <span>Grátis (R$0,00)</span>
          </div>

          <div className="flex justify-between font-semibold mt-4">
            <span>Total</span>
            <span>R${calculateTotal()},00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
