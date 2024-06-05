import * as React from "react";
import Navbar from "../Navbar/Navbar";
import CategoriesSidebar from "../CategoriesSidebar/CategoriesSidebar";
import SpecificationsSidebar from "../SpecificationSidebar/SpecificationSidebar";

const MainPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <CategoriesSidebar onCategorySelect={handleCategorySelect} />
        <SpecificationsSidebar category={selectedCategory} />
      </div>
    </div>
  );
};

export default MainPage;
