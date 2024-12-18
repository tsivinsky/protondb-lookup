import "./style.css";

function main() {
  const searchParams = new URLSearchParams(location.search);
  const link = searchParams.get("link");

  try {
    const u = new URL(link);
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