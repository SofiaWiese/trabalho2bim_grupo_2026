import { useAppNavigation } from "../hooks/useNavigation"

const Cart = ({ ...props }) => {
  const {goBack} = useAppNavigation()  
  const {goToHome} = useAppNavigation()


  return <div {...props} >
    <div className="flex items-center flex-col w-full h-[250px] ">
     <h1>Sapoato</h1>
    
    
      {Cart.length === 0 ? (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjh0nc-PXNOFUmdVVUIrHTJlmiWyMxF9da5g&s" />
      </div>
        <h3>
          O carrinho está <span style={{ "fontWeight": "bold" }}>vazio</span>
        </h3>    

  
    <div>
      <div onClick={goBack} className="cursor-pointer"><h2>Voltar</h2></div>
      </div>

      ) : ( 
      
      <div>
        {Cart.map(item =>
        
          

      
      }


   <div className="cursor-pointer"> <footer>Finalizar compra</footer> </div>

   <div className=" wd-widget">



   </div>

  

  </div>
}
export default Cart

