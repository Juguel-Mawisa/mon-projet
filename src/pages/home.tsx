import { Link } from "react-router-dom";

const articles = [
  { id: 1, title: "React Router expliqué", content: "Contenu de l'article 1" },
  { id: 2, title: "Comprendre useParams", content: "Contenu de l'article 2" },
];
export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des articles</h1>
      <ul className="space-y-2">
        {articles.map((article) => (
          <li key={article.id}>
            <Link
              to={`/article/${article.id}`}
              className="text-blue-600 hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}