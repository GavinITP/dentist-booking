export default async function deleteBooking(
  token: string | undefined,
  id: string,
  { bookingDate }: { bookingDate: string }
) {
  const res = await fetch("http://localhost:9000/api/v1/bookings/" + id, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bookingDate,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update dentist profile");
  }

  return await res.json();
}
