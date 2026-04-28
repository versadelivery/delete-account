"use client";

import { useState } from "react";

export default function DeleteAccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Solicitação de exclusão de conta — Versa Delivery");
    const body = encodeURIComponent(
      `Olá,\n\nGostaria de solicitar a exclusão da minha conta e de todos os dados associados.\n\nNome: ${name}\nE-mail cadastrado: ${email}${reason ? "\nMotivo: " + reason : ""}\n\nAguardo confirmação.\n\nAtenciosamente,\n${name}`
    );
    window.location.href = `mailto:suporte@versadelivery.com.br?subject=${subject}&body=${body}`;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>
          Versa <span style={{ color: "#f97316" }}>Delivery</span>
        </div>

        <h1 style={styles.h1}>Solicitar exclusão de conta</h1>
        <p style={styles.p}>
          Preencha o formulário abaixo para solicitar a exclusão da sua conta e de todos os dados associados a ela.
        </p>

        <div style={styles.info}>
          ⚠️ Após a solicitação, nossa equipe entrará em contato em até{" "}
          <strong>5 dias úteis</strong> para confirmar a exclusão. Dados de pedidos podem ser
          mantidos por até 90 dias para fins legais.
        </div>

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Nome completo</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label style={styles.label}>E-mail cadastrado no app</label>
          <input
            style={styles.input}
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={styles.label}>Motivo (opcional)</label>
          <textarea
            style={styles.textarea}
            placeholder="Conte-nos o motivo, se quiser..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />

          <button type="submit" style={styles.button}>
            Enviar solicitação
          </button>
        </form>

        <hr style={styles.divider} />
        <p style={{ fontSize: 13, color: "#6b7280" }}>
          Ao enviar, sua solicitação será encaminhada para{" "}
          <strong>suporte@versadelivery.com.br</strong>. Você receberá uma confirmação por e-mail.
        </p>

        <div style={styles.footer}>
          Versa Delivery © 2025 — Todos os direitos reservados
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 16px",
    background: "#f5f5f5",
  },
  card: {
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    padding: "40px 36px",
    maxWidth: 480,
    width: "100%",
  },
  logo: { fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 8 },
  h1: { fontSize: 20, fontWeight: 600, margin: "24px 0 8px" },
  p: { fontSize: 14, color: "#555", lineHeight: 1.6, marginBottom: 16 },
  info: {
    background: "#fef3c7",
    border: "1px solid #fde68a",
    borderRadius: 8,
    padding: "12px 14px",
    fontSize: 13,
    color: "#78350f",
    marginBottom: 24,
    lineHeight: 1.5,
  },
  label: { display: "block", fontSize: 13, fontWeight: 500, marginBottom: 6, color: "#333" },
  input: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 14,
    outline: "none",
    marginBottom: 16,
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 14,
    outline: "none",
    marginBottom: 16,
    fontFamily: "inherit",
    resize: "vertical",
    minHeight: 90,
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    background: "#f97316",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
  },
  divider: { border: "none", borderTop: "1px solid #e5e7eb", margin: "24px 0" },
  footer: { fontSize: 12, color: "#9ca3af", textAlign: "center", marginTop: 24 },
};
