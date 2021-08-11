import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "gab", name: "Gabriel" },
    { id: "man", name: "Manoel" },
  ];
  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ClientsPage;
