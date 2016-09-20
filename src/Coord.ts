export const ORIGIN_2D = { x: 0, y: 0 };
export const ORIGIN_3D = { x: 0, y: 0, z: 0 };

export interface Coord2D {
  x: number;
  y: number;
}

export function distance(p1: Coord2D, p2: Coord2D): number {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
