import * as React from "react";

interface AvailableListingsProps {
  category: string | null;
}

const AvailableListings: React.FC<AvailableListingsProps> = ({ category }) => {
  const [listings, setListings] = React.useState<string[]>([]);

  const listingsData: { [key: string]: string[] } = {
    "Electronics": ["Laptop", "Smartphone", "Tablet"],
    "Clothing": ["Shirt", "Pants", "Shoes"],
    "Books": ["Fiction", "Non-fiction", "Children's"],
  };

  React.useEffect(() => {
    if (category && listingsData[category]) {
      setListings(listingsData[category]);
    } else {
      setListings([]);
    }
  }, [category]);

  return (
    <div>
      <h3>Available Listings</h3>
      <ul>
        {listings.map(listing => (
          <li key={listing}>{listing}</li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableListings;
