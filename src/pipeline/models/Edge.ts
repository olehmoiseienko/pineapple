export interface BaseEdge<T = any> {
  id: string;
  source: string;
  target: string;
  label?: string;
  className?: string;
  [key: string]: any;
}
