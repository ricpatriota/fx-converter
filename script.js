// Lê parâmetros da URL
const params = new URLSearchParams(window.location.search);
const fromUserId = params.get("fromUserId");
const toUserId = params.get("toUserId");
const toUserName = params.get("toUserName");
const ratesJSON = params.get("rates");

document.getElementById("recipientName").textContent = toUserName || "Unknown User";

// Guarda os rates se existirem
let rates = {};
try {
  if (ratesJSON) rates = JSON.parse(decodeURIComponent(ratesJSON));
} catch (e) {
  console.error("Erro ao ler rates:", e);
}

// Essa função ainda será preenchida depois (conversão real)
document.getElementById("sendButton").addEventListener("click", () => {
  alert(`Simulação de envio:\nFrom: ${fromUserId}\nTo: ${toUserId}\nAmount: ${document.getElementById("amountSend").value}`);
});
