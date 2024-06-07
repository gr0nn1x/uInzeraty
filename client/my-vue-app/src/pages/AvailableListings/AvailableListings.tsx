// AvailableListings.tsx

import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";

interface Listing {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
}

interface AvailableListingsProps {
  userListings: Listing[];
  otherListings: Listing[];
}

const AvailableListings: React.FC<AvailableListingsProps> = ({ userListings, otherListings }) => {
  return (
    <Box>
      {/* User Listings Section */}
      <Typography variant="h5" gutterBottom style={{ color: 'black' }}>
        Moje inzeráty
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {userListings.map((listing) => (
          <Card key={listing.id} sx={{ width: '250px' }}>
            <CardMedia
              component="img"
              height="140"
              image={listing.imageUrl}
              alt={listing.title}
            />
            <CardContent>
              <Typography variant="h6" component="div" style={{ color: 'black' }}>
                {listing.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ color: 'black' }}>
                {listing.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Other Listings Section */}
      <Typography variant="h5" gutterBottom style={{ color: 'black' }}>
        Inzeráty
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {otherListings.map((listing) => (
          <Card key={listing.id} sx={{ width: '250px' }}>
            <CardMedia
              component="img"
              height="140"
              image={listing.imageUrl}
              alt={listing.title}
            />
            <CardContent>
              <Typography variant="h6" component="div" style={{ color: 'black' }}>
                {listing.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ color: 'black' }}>
                {listing.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" mt={4}>
        <Button variant="contained">Zobrazit více</Button>
      </Box>
    </Box>
  );
};

export default AvailableListings;
