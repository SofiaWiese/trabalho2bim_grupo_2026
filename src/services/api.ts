
export async function getProducts() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
}

export async function getProductById(id:number) {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  return await response.json();
}