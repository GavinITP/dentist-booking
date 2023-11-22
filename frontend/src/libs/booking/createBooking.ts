export default async function createDentist(
  token: string | undefined,
  id: string,
  { bookingDate }: { bookingDate: string }
) {
  const res = await fetch("http://localhost:9000/api/v1/dentists/" + id, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bookingDate,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to create booking");
  }

  return await res.json();
}
