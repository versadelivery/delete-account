import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exclusão de Conta — Versa Delivery",
  description: "Solicite a exclusão da sua conta no Versa Delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, background: "#f5f5f5", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
