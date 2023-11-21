export default async function getDentist(id: string) {
  const res = await fetch("http://localhost:9000/api/v1/dentists/" + id);

  if (!res.ok) throw new Error("Failed to fetch a dentist");

  return res.json();
}
