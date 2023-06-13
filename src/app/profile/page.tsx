type User = {
  id: number;
  name: string;
  email: string;
};

export default async function Profile() {
  const users: User[] = await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {users.map((user) => (
          <div key={user.id} style={{ border: "1px solid #ccc", textAlign: "center" }}>
            <img
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              alt={user.name}
              style={{ height: 180, width: 180 }}
            />
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
