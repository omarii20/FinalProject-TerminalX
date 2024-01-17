export interface Response<T> {
    ok: boolean;
    status: number;
    data: T;
}