// MainPage.tsx

import * as React from "react";
import Navbar from "../Navbar/Navbar";
import CategoriesSidebar from "../CategoriesSidebar/CategoriesSidebar";
import SpecificationsSidebar from "../SpecificationSidebar/SpecificationSidebar";
import AvailableListings from "../AvailableListings/AvailableListings";

const MainPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const userListings = [
    { id: 1, title: "Můj telefon", price: "5000 Kč", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, title: "Můj notebook", price: "15000 Kč", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, title: "Můj notebook", price: "15000 Kč", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, title: "Můj notebook", price: "15000 Kč", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, title: "Můj notebook", price: "15000 Kč", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, title: "Můj notebook", price: "15000 Kč", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, title: "Můj notebook", price: "15000 Kč", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, title: "Můj notebook", price: "15000 Kč", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, title: "Můj notebook", price: "15000 Kč", imageUrl: "https://via.placeholder.com/150" },
  ];

  const otherListings = [
    { id: 3, title: "Telefon", price: "3000 Kč", imageUrl: "https://via.placeholder.com/150" },
    { id: 4, title: "Tablet", price: "4000 Kč", imageUrl: "https://via.placeholder.com/150" },
    { id: 5, title: "Počítač", price: "20000 Kč", imageUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', marginTop: '64px' }}> {/* Adjusted marginTop for Navbar height */}
        <div style={{ width: '250px', minWidth: '200px', overflowY: 'auto' }}>
          <CategoriesSidebar onCategorySelect={handleCategorySelect} />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', width: '56%', display: 'flex', flexDirection: 'column', }}>
          <AvailableListings userListings={userListings} otherListings={otherListings} />
        </div>
        <div style={{ width: '200px', minWidth: '200px', overflowY: 'auto' }}>
          <SpecificationsSidebar category={selectedCategory} />
          </div>
      </div>
    </div>
  );
};

export default MainPage;
