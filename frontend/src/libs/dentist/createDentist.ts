export interface DentistProps {
  name: string;
  hospital: string;
  address: string;
  expertist: string;
  tel: string;
  picture: string;
}

export default async function createDentist(
  token: string | undefined,
  { name, hospital, address, expertist, tel, picture }: DentistProps
) {
  const res = await fetch("http://localhost:9000/api/v1/dentists", {
    method: "POST",
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
    throw new Error("Failed to create dentist profile");
  }

  return await res.json();
}
