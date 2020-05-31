import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';

const formatValue = (value: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

const formatDate = (value: string): string =>
  format(parseISO(value), "d'/'MM'/'yyyy", {
    locale: pt,
  });

export { formatValue, formatDate };
