import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import type { Iproduct } from "../context/StoreContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { getProductById } = useStore()
  const[product, setProduct] = useState<Iproduct>()
  const loadProduct= async ()=>{
    if(id){
      const response = await getProductById(parseInt(id))
      if(response){

        setProduct(response)
        setImagemPrincipal(response.images[0])
      }
    }
  }
  useEffect(()=>{
    loadProduct()
  },[])
 

  const [tamanho, setTamanho] = useState(37);
  const [quantidade, setQuantidade] = useState(1);

  const [nome, setNome] = useState("Nike Zoo Academi 2");
  const [preco, setPreco] = useState("689,00");
  const [descricao, setDescricao] = useState(
    "Com a facilidade do calçar e a autenticidade HS, o Sneaker Calle Cinza é mais do que um simples calçado; ele é uma expressão das ruas latinas, trazendo praticidade e muita personalidade para os seus pés.",
  );

  const imagens = [
    "https://flavios.vtexassets.com/arquivos/ids/226744-1600-1600?v=638312696032030000&width=1600&height=1600&aspect=true",
    "https://flavios.vtexassets.com/arquivos/ids/226745-1600-1600?v=638312696152270000&width=1600&height=1600&aspect=true",
    "https://flavios.vtexassets.com/arquivos/ids/226746-1600-1600?v=638312696233870000&width=1600&height=1600&aspect=true",
  ];

  const [imagemPrincipal, setImagemPrincipal] = useState<string>('');

  const [fade, setFade] = useState(false);

  const trocarImagem = (img) => {
    setFade(true);
    setTimeout(() => {
      setImagemPrincipal(img);
      setFade(false);
    }, 150);
  };

  const tamanhos = [37, 38, 39, 40, 41, 42, 43, 44];

  const avaliacao = 4;

  const renderStars = (nota) => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      estrelas.push(<span key={i}>{i <= nota ? "★" : "☆"}</span>);
    }
    return estrelas;
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-black">
        Sapoato
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 text-black w-full max-w-6xl">
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="overflow-hidden rounded-xl">
            <img
              className={`w-full max-w-[400px] md:max-w-[500px] mx-auto transition-all duration-300 hover:scale-110 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
              src={imagemPrincipal}
              alt="img tenis"
            />
          </div>

          <div className="flex gap-2 md:gap-4 justify-center">
            {product?.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => trocarImagem(img)}
                className={`w-20 md:w-24 cursor-pointer border rounded transition-all duration-200 ${
                  imagemPrincipal === img
                    ? "border-black scale-110"
                    : "border-gray-300 hover:scale-105"
                }`}
              />
            ))}
          </div>

          <div className="mt-6 max-w-[500px] mx-auto md:mx-0">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Descrição do Produto
            </h2>

            <p className="text-sm md:text-base leading-6 md:leading-8 text-gray-700">
              {product? product.description:''}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-[350px]">
          <h2 className="text-xl md:text-2xl font-bold">{product? product.title:''}</h2>

          <div className=" gap-2 text-yellow-500 text-sm">
            {renderStars(avaliacao)}
            <span className="text-gray-500">(124 avaliações)</span>
          </div>

          <h2 className="text-lg md:text-xl">R${product?.price}</h2>

          <p className="text-green-500 text-sm md:text-base">Frete grátis</p>

          <h2 className="mt-2 md:mt-4">
            Tamanho: <span className="font-bold">{tamanho}</span>
          </h2>

          <div className="flex gap-2 flex-wrap">
            {tamanhos.map((t) => (
              <button
                key={t}
                onClick={() => setTamanho(t)}
                className={`px-3 py-1 border rounded text-sm md:text-base ${
                  tamanho === t ? "bg-black text-white" : "bg-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between md:justify-start gap-4 mt-4">
            <div className="flex items-center gap-4 border px-4 py-2 rounded">
              <button
                onClick={() =>
                  setQuantidade(quantidade > 1 ? quantidade - 1 : 1)
                }
              >
                -
              </button>

              <span>{quantidade}</span>

              <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 w-full md:w-auto hover:scale-105 transition-all">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
