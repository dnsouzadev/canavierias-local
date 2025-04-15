import { ItemCardapio } from './ItemCardapio';

export interface Comercio {
  id: string;
  nome: string;
  descricao: string;
  telefone: string;
  endereco: string;
  taxaEntrega: number;
  horarioFuncionamento: string;
  tipoComercio: string;
  fotoUrl: string;
  cardapio: ItemCardapio[];
  codigoAcesso: string;
}
