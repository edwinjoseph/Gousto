export interface ICategory {
  id: string;
  title: string;
  hidden: boolean;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  categories: ICategory[];
  images: {
    [name: string]: {
      src: string;
      url: string;
      width: string;
    }
  }
}

export interface IGoustoResponse<T> {
  body: {
    data: T
  }
}
