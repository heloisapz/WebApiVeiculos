export interface Veiculo {
    getVeiculoById(id: number): unknown;
    id?: number;
    modelo: string;
    placa: string;
    grupoId: number;
}