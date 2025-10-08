export const formatNumber = num => {
  return new Intl.NumberFormat().format(num);
};

export const formatPercentage = (num, decimals = 2) => {
  return `${parseFloat(num).toFixed(decimals)}%`;
};

export const formatDate = date => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};
