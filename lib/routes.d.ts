export type Route = {
  name: string;
  path?: string | null;
  children?: Route[];
}