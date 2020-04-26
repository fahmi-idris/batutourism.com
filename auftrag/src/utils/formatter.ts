export const getSubstraction = (from: string, to: string) => {
  const toDate: any = new Date(to);
  const fromDate: any = new Date(from);
  const diffTime = Math.abs(toDate - fromDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const getPrice = (room: any, from: string, to: string) => {
  const { data } = room;
  const { price } = data;
  const totalPrice = price * getSubstraction(from, to);
  return totalPrice;
};

export const generateInvoice = (type: string) => {
  const prefix = 'INV';
  const separator = '/';
  const date = new Date();
  return `${prefix}${separator}${type.substring(0, 3)}${separator}${date
    .toISOString()
    .slice(0, 10)}${separator}${Math.random().toString(36).slice(-10).toUpperCase()}`;
};
