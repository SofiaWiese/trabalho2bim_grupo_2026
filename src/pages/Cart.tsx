
import { useAppNavigation } from "../hooks/useNavigation";
import { useStore } from "../hooks/useStore";


const Cart = ({ ...props }) => {
  const { goBack, goToCheckout } = useAppNavigation();


  const { cart } = useStore();

  const total = cart.reduce(
    (acc, item) => acc + (item.price || 0),
    0
  );

  return (
    <div {...props}>
      <div className="flex flex-col items-center w-full min-h-screen p-4">

        <h1 className="text-3xl font-bold mb-6">Sapoato</h1>
        <img src="https://www.publicdomainpictures.net/pictures/290000/nahled/frog-vintage-drawing.jpg" alt="" />

        {cart.length === 0 ? (
          <div className="flex flex-col items-center gap-4 mt-10">
            <h2 className="text-xl font-bold">
              Carrinho vazio
            </h2>

            <button
              onClick={goBack}
              className="bg-black text-white px-6 py-2 rounded"
            >
              Continuar comprando
            </button>
          </div>
        ) : (
          <div className="w-full max-w-4xl flex flex-col gap-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="
                  flex justify-between items-center
                  border rounded-lg p-4 shadow-sm
                  transition-all duration-300
                  hover:scale-[1.02] hover:shadow-lg
                "
              >

                <div>
                  <h2 className="font-bold">
                    {item.title}
                  </h2>

                  <p>R$ {item.price}</p>
                </div>

              </div>
            ))}

            <div className="border-t pt-4 flex justify-between font-bold text-xl">
              <span>Total:</span>
              <span>R$ {total}</span>
            </div>

            <button className="bg-black text-white py-3 rounded hover:bg-gray-800"
            onClick={goToCheckout}>
              Finalizar compra
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
