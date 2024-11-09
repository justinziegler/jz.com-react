export function preventDefault(e) {
  e.preventDefault();
  e.target.blur();
  console.log('Link disabled');
}