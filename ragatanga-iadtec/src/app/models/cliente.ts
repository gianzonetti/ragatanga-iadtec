import { Estado } from './estado';

export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: string;
    situacao: string;
    email: string;
    estado: Estado;
}
