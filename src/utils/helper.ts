export function createUniqueSlug(str: string) {
  const slug = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const uniqueId =
    Date.now().toString(16) +
    Math.random().toString(16).replace('0.', '');

  return `${slug}-${uniqueId}`;
}