import { type ReactNode } from "react";
import { Header } from "./Header";
import { Menu } from "./Sidebar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {/* O seu Header já traz o Menu/Navbar grudado embaixo dele automaticamente */}
      <Header />

      {/* Conteúdo dinâmico da página que entra aqui */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Rodapé da Sapoato sempre fixado na base do site */}
      <Footer />
    </div>
  );
}
