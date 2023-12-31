export default async function getDentists() {
  const res = await fetch("http://localhost:9000/api/v1/dentists", {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch dentists");

  return res.json();
}
