export interface BookData {
  isbn: string;
  title: string;
  authors: string[];
  image: string;
  description: string;
  rank?: number | null;
  publishedDate?: string | null;
  pageCount?: number | null;
  categories?: string[] | null;
  amazon?: string | null;
}
