export interface ICategory {
  id: string,
  title: string,
  hidden: boolean
}

export interface ICategoriesResponse {
  body: {
    data: ICategory[]
  }
}
