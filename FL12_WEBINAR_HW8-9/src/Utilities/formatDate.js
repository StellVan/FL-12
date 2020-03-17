export function formatDate(date) {
  return date
    .split('-')
    .reverse()
    .join('.');
}

export function formatDateReverse(date) {
  return date
    .split('.')
    .reverse()
    .join('-');
}
