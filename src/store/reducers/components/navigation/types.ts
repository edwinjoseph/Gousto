export interface ICategory {
  id: string,
  title: string,
}

export interface IState {
  isLoading: boolean;
  status?: 'ok' | 'failed';
  data: ICategory[];
}
