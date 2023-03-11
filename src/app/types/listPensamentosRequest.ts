export type ListPensamentosRequest = {
    page: number;
    limit?: number;
    filtro?: string | null;
    favorito?: boolean;
};
