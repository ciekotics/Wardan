export function generateSlug(title: string, existingSlugs: string[]) {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return () => {
    let slug = baseSlug;
    let count = 1;

    while (existingSlugs.includes(slug)) {
      slug = `${baseSlug}-${count}`;
      count += 1;
    }
    return slug;
  };
}
