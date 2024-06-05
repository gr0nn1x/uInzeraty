import * as React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";
import specificationsData from "./specificationsData";

interface SpecificationsSidebarProps {
  category: string | null;
}

const SpecificationSidebar: React.FC<SpecificationsSidebarProps> = ({
  category,
}) => {
  const [selectedType, setSelectedType] = React.useState<string>("");

  const handleTypeSelect = (event: SelectChangeEvent<string>) => {
    setSelectedType(event.target.value);
  };

  // Reset selectedType when category changes
  React.useEffect(() => {
    setSelectedType("");
  }, [category]);

  const renderSpecifications = () => {
    if (
      category &&
      selectedType &&
      specificationsData[category]?.[selectedType]
    ) {
      return (
        <div>
          <h4 style={{ color: "#000" }}>Specifications for {selectedType}</h4>
          <ul>
            {specificationsData[category][selectedType].map((spec, index) => (
              <li key={index} style={{ color: "#000" }}>{spec}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "4rem",
        right: 0,
        width: "200px",
        height: "calc(100vh - 4rem)",
        backgroundColor: "#fff",
        borderLeft: "1px solid #ccc",
        padding: "1rem",
        overflowY: "auto", // Add scrollbar
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <Select
          value={selectedType}
          onChange={handleTypeSelect}
          displayEmpty
          fullWidth
          variant="standard"
          MenuProps={{ PaperProps: { style: { borderBottom: "none" } } }}
          disabled={!category}
          inputProps={{ style: { color: "#000" } }}
        >
          <MenuItem value="" disabled>
            {category ? "Vyberte zařízení" : "Vyberte kategorii"}
          </MenuItem>
          {category &&
            Object.keys(specificationsData[category] || {}).map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
        </Select>
      </div>
      {renderSpecifications()}
    </div>
  );
};

export default SpecificationSidebar;
