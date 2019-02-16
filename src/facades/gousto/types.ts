export interface ICategory {
  id: string,
  title: string,
}

export interface ICategoriesResponse {
  body: {
    data: ICategory[]
  }
}
