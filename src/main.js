import "./style.css";

window.addEventListener("beforeinstallprompt", (e) => {
  const btn = document.querySelector(".install-btn");
  if (!btn) return;

  btn.style.display = "block";
  btn.addEventListener("click", () => e.prompt());
});

function main() {
  const searchParams = new URLSearchParams(location.search);
  const link = searchParams.get("link");
  if (!link) return;

  const div = document.createElement("div");
  div.innerHTML = searchParams.toString();
  document.body.appendChild(div);

  try {
    const u = new URL(decodeURIComponent(link));
    if (u.hostname !== "store.steampowered.com") {
      return;
    }

    if (!u.pathname.startsWith("/app")) {
      return;
    }

    const list = u.pathname.split("/");
    const appId = list[2];

    location.href = `https://www.protondb.com/app/${appId}`;
  } catch (err) {
    console.error(err);
  }
}

main();
