export default async function(input) {
  const response = await fetch(input);
  const data = await response.json();
  return data;
}
