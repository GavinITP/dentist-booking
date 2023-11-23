export default async function updateDentist(
  token: string | undefined,
  id: string,
  {
    name,
    hospital,
    address,
    expertist,
    tel,
    picture,
  }: {
    name: string;
    hospital: string;
    address: string;
    expertist: string;
    tel: string;
    picture: string;
  }
) {
  const res = await fetch("http://localhost:9000/api/v1/dentists/" + id, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      hospital,
      address,
      expertist,
      tel,
      picture,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update dentist profile");
  }

  return await res.json();
}
