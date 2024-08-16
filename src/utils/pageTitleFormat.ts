export const formatPageTitle = (title: string) => {
  const decodedTitle = decodeURIComponent(title);
  return decodedTitle
    .split(/[- ]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
