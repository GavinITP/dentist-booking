interface Props {
  name: string;
  email: string;
  tel: string;
  password: string;
}

export default async function registerUser({
  name,
  email,
  tel,
  password,
}: Props) {
  const res = await fetch("http://localhost:9000/api/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      tel,
      role: "user",
      password,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to register");
  }

  return await res.json();
}
