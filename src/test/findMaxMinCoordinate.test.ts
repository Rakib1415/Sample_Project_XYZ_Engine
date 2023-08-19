import { describe, expect, it } from 'vitest';
import { findMaxMinCoordinate } from '../utils';

describe('findMaxMinCoordinate function test', () => {
  it('should return right output', () => {
    const maxMinCoordinations = findMaxMinCoordinate([
      {
        KP: '233',
        X: '244',
        Y: '244',
        Z: '244',
      },
      {
        KP: '12',
        X: '3',
        Y: '-2',
        Z: '-6',
      },
      {
        KP: '233',
        X: '33',
        Y: '22',
        Z: '11',
      },
    ]);
    expect(maxMinCoordinations).toEqual({
      max_x: 244,
      max_y: 244,
      max_z: 244,
      min_x: 3,
      min_y: -2,
      min_z: -6,
    });
  });

  it('should throw an error when the pass the empty array', () => {
    expect(() => findMaxMinCoordinate([])).toThrowError();
  });
});
