import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const articles = [
  { id: "1", title: "React Router expliqué", content: "Voici le contenu complet de l'article 1." },
  { id: "2", title: "Comprendre useParams", content: "Voici le contenu complet de l'article 2." },
];

export default function ArticleCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => a.id === id);

  useEffect(() => {
    if (!article) {
      // redirection après 2 secondes vers l'accueil
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [article, navigate]);

  if (!article) return <p className="p-6 text-red-600">Article introuvable. Redirection vers l’accueil...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
      <p>{article.content}</p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Retour à l'accueil
      </button>
      
    </div>
  );
}
