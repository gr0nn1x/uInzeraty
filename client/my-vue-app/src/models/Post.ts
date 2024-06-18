// Funkce pro vytvoření nového příspěvku
export const createPost = async (formData) => {
  // Odeslání požadavku na server
  const res = await fetch("http://localhost:3000/api/v1/post", {
    body: formData, // Data příspěvku
    method: "POST", // Metoda HTTP požadavku
  });
  
  // Zpracování odpovědi serveru
  const data = await res.json();
  return {
    status: res.status, // HTTP status kód
    msg: data.msg, // Zpráva z odpovědi serveru
  };
};

// Funkce pro získání všech příspěvků
export const getUploads = async () => {
  // Odeslání požadavku na server
  const req = await fetch("http://localhost:3000/api/v1/post", {
    headers: {
      Accept: "application/json", // Přijetí formátu JSON
      "Content-Type": "application/json", // Odeslání formátu JSON
    },
    method: "GET", // Metoda HTTP požadavku
  });
  
  // Zpracování odpovědi serveru
  const data = await req.json();
  return {
    status: req.status, // HTTP status kód
    payload: data.payload, // Data příspěvků
    msg: data.msg, // Zpráva z odpovědi serveru
  };
};

// Typ Post, který definuje strukturu objektu příspěvku
export type Post = {
  description?: string; // Popis příspěvku (volitelný)
  postname?: string; // Název příspěvku (volitelný)
  password?: string; // Heslo příspěvku (volitelný)
  photo?: string; // URL fotografie příspěvku (volitelný)
  createdAt?: string; // Datum vytvoření příspěvku (volitelný)
  updatedAt?: string; // Datum poslední aktualizace příspěvku (volitelný)
};
