import { useAppNavigation } from "../hooks/useNavigation"
import { useStore } from "../hooks/useStore"

const Cart = ({ ...props }) => {
  const { goBack, goToHome } = useAppNavigation()
  const { cart } = useStore()


  return (<div {...props} >
    <div className="flex items-center flex-col w-full h-[250px] ">
      <h1>Sapoato</h1>

      
      {cart.length === 0 ? (
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjh0nc-PXNOFUmdVVUIrHTJlmiWyMxF9da5g&s" />
          <h3>
            O carrinho está <span style={{ "fontWeight": "bold" }}>vazio</span>
          </h3>



          <div onClick={goBack} className="cursor-pointer"><h2>Voltar</h2></div>
        </div>

      ) : (
        cart.map(item =>
        <div>
        
          
        </div>
      )
      
      
      )} 

      <div className="cursor-pointer"> 
        <footer>Finalizar compra</footer> 
      </div>
    <div className="wd-widget"></div> 
    </div>
  </div>
  )
}
export default Cart

