export const formatDate = (date: Date) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return date;
  }

  return date.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export const formatAmount = (amount: number) => {
  return amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
};

export const generateAvatarByText = (text: string) => {
  const words = text.trim().split(/\s+/);

  if (words.length === 1) {
    const word = words[0];
    return word.length > 1
      ? `${word[0]}${word[word.length - 1]}`.toUpperCase()
      : word.toUpperCase();
  }

  return `${words[0][0]}${words[1][0]}`.toUpperCase();
};
