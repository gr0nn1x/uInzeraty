// specificationsData.ts

export interface Specifications {
    [category: string]: {
      [type: string]: string[];
    };
  }
  
  const specifications: Specifications = {
    Elektronika: {
      Telefon: ["Značka", "Model", "CPU", "RAM", "Úložiště", "Displej", "Baterie", "Kamera", "Operační systém", "Funkce"],
      Tablet: ["Značka", "Model", "CPU", "RAM", "Úložiště", "Displej", "Baterie", "Kamera", "Operační systém", "Funkce"],
      Počítač: ["Značka", "Model", "CPU", "GPU", "RAM", "Úložiště", "Operační systém", "Rozhraní"],
      Televize: ["Značka", "Model", "Velikost", "Rozlišení", "Typ obrazovky", "Smart TV", "Zvukový systém"],
      Notebook: ["Značka", "Model", "CPU", "GPU", "RAM", "Úložiště", "Operační systém", "Baterie", "Displej"],
      Fotoaparát: ["Značka", "Model", "Typ", "Rozlišení", "Úložiště", "Objektiv", "Blesk"],
    },
    Vozidla: {
      Automobil: ["Značka", "Model", "Rok výroby", "Motor", "Typ paliva", "Barva", "Spotřeba", "Výbava", "Najetá vzdálenost"],
      Helikoptéra: ["Značka", "Model", "Rok výroby", "Typ motoru", "Maximální rychlost", "Nosnost", "Palubní systém", "Nalétaná vzdálenost"],
      Letadlo: ["Značka", "Model", "Rok výroby", "Typ motoru", "Maximální rychlost", "Nosnost", "Palubní systém", "Nalétaná vzdálenost"],
      Loď: ["Značka", "Model", "Rok výroby", "Typ motoru", "Délka", "Maximální rychlost", "Vybavení"],
      Motocykl: ["Značka", "Model", "Rok výroby", "Motor", "Typ paliva", "Výkon", "Spotřeba", "Najetá vzdálenost"],
      Kolo: ["Značka", "Model", "Typ", "Rám", "Velikost kol", "Brzdy", "Převody", "Vidlice"],
    },
    Gaming: {
      Konzole: ["Značka", "Model", "CPU", "GPU", "RAM", "Úložiště", "Rozlišení", "Ovladač"],
      "PC setup": ["Značka", "Model", "CPU", "GPU", "RAM", "Úložiště", "Operační systém", "Monitor", "Klávesnice", "Myš"],
      Příslušenství: ["Značka", "Typ", "Kompatibilita", "Vlastnosti", "Barva", "Materiál"],
    },
    Domácnost: {
      Lednička: ["Značka", "Model", "Kapacita", "Energetická třída", "Funkce", "Displej", "Ovládání"],
      Pračka: ["Značka", "Model", "Kapacita", "Energetická třída", "Funkce", "Programy", "Ovládání"],
      Myčka: ["Značka", "Model", "Kapacita", "Energetická třída", "Funkce", "Programy", "Ovládání"],
      Vysavač: ["Značka", "Model", "Typ", "Výkon", "Hlučnost", "Filtr", "Napájení"],
      "Mikrovlnná trouba": ["Značka", "Model", "Kapacita", "Výkon", "Funkce", "Programy", "Ovládání"],
      "Horkovzdušná trouba": ["Značka", "Model", "Kapacita", "Výkon", "Funkce", "Programy", "Ovládání"],
    },
    Drogérie: {
      Šampon: ["Značka", "Typ", "Objem", "Pro typ vlasů", "Vůně", "Složení"],
      Mýdlo: ["Značka", "Typ", "Vůně", "Objem", "Složení"],
      "3v1": ["Značka", "Typ", "Vůně", "Objem", "Složení"],
      "Prací prášek": ["Značka", "Typ", "Hmotnost", "Počet praní", "Vůně", "Složení"],
      "Zubní pasta": ["Značka", "Typ", "Objem", "Funkce", "Složení"],
    },
    Hračky: {
      Stavebnice: ["Značka", "Typ", "Materiál", "Počet dílků", "Věk", "Motiv", "Náročnost"],
      Panenka: ["Značka", "Velikost", "Materiál", "Vlastnosti", "Oblečení", "Vlasy"],
      Autíčko: ["Značka", "Typ", "Materiál", "Velikost", "Barva", "Funkce"],
      Puzzle: ["Značka", "Počet dílků", "Motiv", "Velikost", "Obtížnost"],
    },
    Zvířata: {
      Hmyz: ["Typ", "Hmotnost", "Skupina", "Délka života", "Dieta", "Velikost terária", "Potřeby", "Náročnost chovu"],
      Hlodavci: ["Typ", "Hmotnost", "Skupina", "Délka života", "Dieta", "Velikost klece", "Potřeby", "Náročnost chovu"],
      Ještěři: ["Typ", "Hmotnost", "Skupina", "Délka života", "Dieta", "Velikost terária", "Potřeby", "Náročnost chovu"],
      Ptactvo: ["Typ", "Hmotnost", "Skupina", "Délka života", "Dieta", "Velikost klece", "Potřeby", "Náročnost chovu"],
      Rybyčky: ["Typ", "Hmotnost", "Skupina", "Délka života", "Dieta", "Velikost akvária", "Potřeby", "Náročnost chovu"],
      Krmivo: ["Značka", "Typ", "Hmotnost", "Pro typ zvířete", "Složení", "Dávkování"],
      Hračky: ["Značka", "Typ", "Materiál", "Velikost", "Barva", "Funkce"],
      Pelíšky: ["Značka", "Velikost", "Materiál", "Vlastnosti", "Barva", "Tvar"],
      Obojky: ["Značka", "Velikost", "Materiál", "Vlastnosti", "Barva", "Přezka"],
    },
    Sport: {
      Fotbal: ["Značka", "Typ", "Materiál", "Velikost", "Barva", "Vzor"],
      Tenis: ["Značka", "Typ", "Materiál", "Velikost", "Barva", "Povrch"],
      Kolo: ["Značka", "Model", "Typ", "Rám", "Velikost kol", "Barva", "Převody"],
      Lyžování: ["Značka", "Typ", "Délka", "Materiál", "Barva", "Vzor"],
    },
    Knihy: {
      Beletrie: ["Autor", "Název", "Žánr", "Počet stran", "Vydavatel", "Jazyk", "Vazba"],
      "Odborná literatura": ["Autor", "Název", "Obor", "Počet stran", "Vydavatel", "Jazyk", "Vazba"],
      Komiksy: ["Autor", "Název", "Žánr", "Počet stran", "Vydavatel", "Jazyk", "Vazba"],
      "Dětská literatura": ["Autor", "Název", "Věk", "Počet stran", "Vydavatel", "Jazyk", "Vazba"],
    },
    Historické: {
      "Starožitnosti": ["Původ", "Stav", "Materiál", "Rozměry", "Historická hodnota", "Doba výroby", "Použití", "Provenance", "Umístění", "Autentičnost"],
      "Numismatika": ["Původ", "Stav", "Materiál", "Rok ražby", "Hmotnost", "Nominální hodnota", "Emise", "Kvalita ražby", "Rarita", "Styl"],
      "Archeologické nálezy": ["Lokalita", "Stav", "Materiál", "Doba", "Původ", "Historický kontext", "Význam", "Odkryté artefakty", "Nálezová situace", "Datování"],
      "Dokumenty": ["Doba", "Typ", "Původ", "Jazyk", "Stav", "Obsah", "Autenticita", "Důvěryhodnost", "Zpracování", "Historická relevance", "Provenance"],
      "Zbraně": ["Typ", "Původ", "Materiál", "Rok výroby", "Stav", "Délka", "Hmotnost", "Provenance", "Význam", "Použití"],
      "Starověké artefakty": ["Civilizace", "Období", "Materiál", "Technologie", "Nálezové místo", "Stav", "Význam", "Provenance", "Autenticita", "Historická hodnota"],
      "Historická oděvní móda": ["Styl", "Období", "Materiál", "Stav", "Provenance", "Použití", "Původní majitel", "Designér", "Doplňky", "Značka"],
      "Výstroj": ["Typ", "Období", "Materiál", "Stav", "Provenance", "Použití", "Značka", "Důležitost", "Umístění", "Autentičnost"],
      "Nábytek": ["Typ", "Období", "Materiál", "Stav", "Provenance", "Použití", "Design", "Umístění", "Hmotnost", "Velikost"],
    },
  
    Zahrada: {
      "Rostliny": ["Druh", "Typ", "Původ", "Velikost", "Požadavky na péči", "Květ", "Plod"],
      "Zahradní nábytek": ["Materiál", "Typ", "Rozměry", "Styl", "Odpovídající příslušenství", "Barva", "Design"],
      "Zahradní nářadí": ["Typ", "Materiál", "Rozměry", "Funkce", "Kvalita", "Ergonomie", "Bezpečnost"],
      "Zahradní dekorace": ["Materiál", "Typ", "Velikost", "Styl", "Umístění", "Motiv", "Barva"],
    },
    "Oblečení a obuv": {
      "Dámské oblečení": ["Typ", "Velikost", "Materiál", "Styl", "Péče o oblečení", "Barva", "Vzor", "Značka"],
      "Pánské oblečení": ["Typ", "Velikost", "Materiál", "Styl", "Péče o oblečení", "Barva", "Vzor", "Značka"],
      "Dětské oblečení": ["Typ", "Velikost", "Materiál", "Styl", "Péče o oblečení", "Barva", "Vzor", "Značka"],
      "Obuv": ["Typ", "Velikost", "Materiál", "Styl", "Péče o obuv", "Barva", "Design", "Značka"],
    },
    Nářadí: {
      "Ruční nářadí": ["Typ", "Materiál", "Rozměry", "Funkce", "Kvalita", "Bezpečnost", "Ergonomie", "Značka"],
      "Elektrické nářadí": ["Typ", "Výkon", "Materiál", "Funkce", "Bezpečnostní prvky", "Příslušenství", "Napájení", "Výdrž baterie", "Značka"],
      "Zahradní nářadí": ["Typ", "Materiál", "Rozměry", "Funkce", "Kvalita", "Bezpečnost", "Ergonomie", "Značka"],
      "Stavební nářadí": ["Typ", "Materiál", "Rozměry", "Funkce", "Kvalita", "Bezpečnost", "Ergonomie", "Značka"],
    },
  };
  
  export default specifications;
  
