export default async function getBookings(token: string | undefined) {
  if (!token) {
    throw new Error("Token is undefined");
  }

  const res = await fetch("http://localhost:9000/api/v1/bookings", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return res.json();
}
