import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user: any) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="p-6">Chargement...</p>;
  if (error) return <p className="p-6 text-red-600">Erreur : {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des utilisateurs</h1>

      <input
        type="text"
        placeholder="Rechercher par nom..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full border px-3 py-2 rounded"
      />

      <ul className="space-y-2">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user: any) => (
            <li key={user.id} className="border p-2 rounded">
              <Link to={`/users/${user.id}`} className="text-blue-600 underline">
                {user.name}
              </Link>{" "}
              - {user.email}
            </li>
          ))
        ) : (
          <li className="text-gray-500">Aucun utilisateur trouvé</li>
        )}
      </ul>
    </div>
  );
}
