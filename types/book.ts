export interface Book {
  _id: string
  title: string
  author: string
  published_year: number
  genre: string
  created_at: string
  updated_at: string
}

export interface BookFormData {
  title: string
  author: string
  published_year: string
  genre: string
}

export type ViewMode = 'list' | 'add' | 'edit' | 'view'