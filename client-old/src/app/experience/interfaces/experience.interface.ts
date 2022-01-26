export interface ApiResponse {
  experiences: Experience[];
  experience: Experience;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  createdBy: string;
  createdAt: string;
}