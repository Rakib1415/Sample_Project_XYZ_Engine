/* eslint-disable @typescript-eslint/naming-convention */
import { Coordination } from '../components/ReadFile';

export const findMaxMinCoordinate = (coordinations: Coordination[] = []) => {
  if (coordinations.length === 0) {
    throw new Error('Invalid Argument.');
  }
  let max_x = parseFloat(coordinations[0]?.X);
  let max_y = parseFloat(coordinations[0]?.Y);
  let max_z = parseFloat(coordinations[0]?.Z);

  let min_x = parseFloat(coordinations[0]?.X);
  let min_y = parseFloat(coordinations[0]?.Y);
  let min_z = parseFloat(coordinations[0]?.Z);

  coordinations.forEach((item: Coordination) => {
    max_x = Math.max(parseFloat(item.X), max_x);
    max_y = Math.max(parseFloat(item.Y), max_y);
    max_z = Math.max(parseFloat(item.Z), max_z);

    min_x = Math.min(parseFloat(item.X), min_x);
    min_y = Math.min(parseFloat(item.Y), min_y);
    min_z = Math.min(parseFloat(item.Z), min_z);
  });
  return {
    max_x,
    max_y,
    max_z,
    min_x,
    min_y,
    min_z,
  };
};

export const getSayHello = () => 'Hello!';
