export default async function deleteDentist(
  token: string | undefined,
  id: string
) {
  const res = await fetch("http://localhost:9000/api/v1/dentists/" + id, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to delete dentist profile");
  }

  return await res.json();
}
