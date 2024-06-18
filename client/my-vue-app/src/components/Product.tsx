// Importujeme všechny exporty z knihovny React
import * as React from "react"; 

// Importujeme komponentu Box z knihovny @mui/material
import { Box } from "@mui/material"; 

// Importujeme CSS styl pro komponentu Product
import "./Product.css"; 

// Importujeme hook useState z knihovny React
import { useState } from "react"; 

// Definujeme výchozí exportovanou funkční komponentu Product
export default function Product(props) {

  // Definujeme stav pro viditelnost vstupu (hesla)
  const [isInputVisible, setInputVisible] = useState(false); 

  // Definujeme stav pro heslo
  const [password, setPassword] = useState(""); 

  // Definujeme stav pro chybové zprávy
  const [error, setError] = useState(null); 

  // Funkce pro přepnutí viditelnosti vstupu pro heslo
  const handleToggleInput = () => {
    setInputVisible(!isInputVisible); 
  };

  // Funkce pro aktualizaci hesla při změně vstupu
  const handlePasswordChange = (e) => {
    setPassword(e.target.value); 
  };

  // Funkce pro zpracování smazání inzerátu
  const handleDelete = async () => {
    // Posíláme požadavek na ověření hesla
    const res = await fetch(
      `http://localhost:3000/api/v1/post/${props.id}/checkPassword`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }), 
      }
    );

    // Získáváme odpověď jako JSON
    const data = await res.json(); 

    // Kontrolujeme status odpovědi a shodu hesla
    if (res.status === 200 && data.match) { 
      // Pokud je heslo správné, posíláme požadavek na smazání inzerátu
      const deleteRes = await fetch(
        `http://localhost:3000/api/v1/post/${props.id}`,
        {
          method: "DELETE",
        }
      );

      // Pokud je smazání úspěšné, reloadujeme stránku
      if (deleteRes.status === 200) { 
        window.location.reload(); 
      } else {
        // Pokud smazání selže, nastavujeme chybovou zprávu
        setError("Nepodařilo se smazat inzerát."); 
      }
    } else {
      // Pokud je heslo špatné, nastavujeme chybovou zprávu
      setError("Špatné heslo."); 
    }
  };

  return (
    <div
      style={{
        overflow: "hidden", // Skryjeme přetečení obsahu
        border: "5px solid black", // Černý rámeček
        width: "100%", // Šířka na 100% rodičovského prvku
        height: "100%", // Výška na 100% rodičovského prvku
        backgroundColor: "grey", // Šedé pozadí
        display: "flex", // Flexbox layout
        alignContent: "center", // Vyrovnání obsahu do středu
        flexDirection: "column", // Flex směr sloupec
      }}
    >
      <img
        style={{
          width: "100%", // Šířka obrázku na 100% rodičovského prvku
        }}
        src={props.photo} // Zdroj obrázku
        alt={props.postname} // Alternativní text obrázku
        title={props.postname} // Titulek obrázku
      />
      <div
        style={{
          flexDirection: "column", // Flex směr sloupec
          overflow: "hidden", // Skryjeme přetečení obsahu
          justifyContent: "flex-start", // Zarovnání obsahu na začátek
          paddingLeft: "5px", // Vnitřní odsazení vlevo
        }}
      >
        <p style={{ fontSize: "24px", fontWeight: "bold", maxWidth: "100%", overflowWrap: "break-word" }}>
          {props.postname.length > 56 ? props.postname.substr(0, 56) : props.postname}
          {/* Zobrazíme postname, pokud je delší než 56 znaků, zkrátíme jej */}
        </p>
        <p style={{ color: "black", maxWidth: "100%", overflowWrap: "break-word" }}>
          {props.description}
          {/* Zobrazíme popis inzerátu */}
        </p>
        <p style={{ color: "yellow", maxWidth: "100%", overflowWrap: "break-word" }}>
          Kategorie: {props.category}
          {/* Zobrazíme kategorii inzerátu */}
        </p>
      </div>
      <Box
        sx={{
          color: "red", // Červená barva textu
          fontSize: "30px", // Velikost písma 30px
          cursor: "pointer", // Ukazatel kurzoru na pointer
          paddingLeft: "5px", // Vnitřní odsazení vlevo
          width: "5%", // Šířka 5%
          "&:hover": {
            transform: "scale(1.2)", // Zvýšení velikosti při hoveru
          },
        }}
        onClick={handleToggleInput} // Při kliknutí se zavolá handleToggleInput
      >
        X
      </Box>
      {isInputVisible && (
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <input
            type="password"
            style={{
              marginTop: 10, // Horní odsazení 10px
              padding: 5, // Vnitřní odsazení 5px
              fontSize: "16px", // Velikost písma 16px
            }}
            placeholder="zadejte Heslo" // Placeholder pro input
            value={password} // Hodnota inputu je nastavena na password
            onChange={handlePasswordChange} // Při změně voláme handlePasswordChange
          />
          <button onClick={handleDelete} style={{ marginTop: 10 }}>
            Smazat inzerát
            {/* Tlačítko pro smazání inzerátu */}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {/* Pokud je chyba, zobrazí se chybová zpráva */}
        </div>
      )}
    </div>
  );
}
