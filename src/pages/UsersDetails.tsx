import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-6">Chargement...</p>;
  if (!user) return <p className="p-6">Utilisateur non trouvé</p>;

  return (
    <div className="p-6">
      <Link to="/users" className="text-sm text-blue-600 underline">
        ← Retour à la liste
      </Link>
      <h2 className="text-2xl font-bold mt-2 mb-2">{user.name}</h2>
      <p><strong>Email :</strong> {user.email}</p>
      <p><strong>Téléphone :</strong> {user.phone}</p>
      <p><strong>Site :</strong> {user.website}</p>
      <p><strong>Entreprise :</strong> {user.company?.name}</p>
    </div>
  );
}
