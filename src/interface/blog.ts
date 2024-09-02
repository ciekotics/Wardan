
export interface Blog {
  id?: number;
  title: string;
  slug: string;
  description: string | null;
  "small-paragraph": string | null;
  "long-paragraph": string;
  banner: string;
  "created-at": string;
}
