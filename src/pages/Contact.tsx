import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logique d'envoi du formulaire
        alert("Formulaire envoyé !");
        navigate("/");
    };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <form className="space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          placeholder="Votre message"
          className="w-full border px-3 py-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
