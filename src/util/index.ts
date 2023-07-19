export const pascalCase = (s: string) => s.replaceAll(/(?:^(.))|(?:-(\w))/g, (_, char1, char2) => (char1 || char2).toUpperCase());
