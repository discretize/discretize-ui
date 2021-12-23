export default function firstUppercase(text) {
  if (typeof text === 'undefined' || text === null || text === '') return '';

  const toUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return text.split(' ').map(toUpper).join(' ').trim();
}
