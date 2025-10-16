export interface SpaService {
  id: number;
  title: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  rating: number;
  description: string;
  features: string[];
  tags: string[];
  whatsappText: string;
  duration?: string;
  isNew?: boolean;
}