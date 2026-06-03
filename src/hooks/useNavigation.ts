import { useNavigate } from "react-router-dom";

export function useAppNavigation() {
  const navigate = useNavigate();

  return {
    goToHome: () => navigate("/"),
    goToCart: () => navigate("/cart"),
    goToProduct: (id: string) => navigate(`/product/${id}`),
    goToCheckout: () => navigate("/checkout"),
    goBack: () => navigate(-1),
  };
}
