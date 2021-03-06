export interface ApiResponse {
  laptops: Laptop[];
  laptop: Laptop;
}

export interface Laptop {
  readonly id: string;
  readonly brand: string;
  readonly model: string;
  readonly price: number;
  readonly size: string;
  readonly specs: string;
  readonly imageUrl?: string;
}