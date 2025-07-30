// interfaces/index.ts

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string; // Added for property cards
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

// Add other interfaces here as the project grows