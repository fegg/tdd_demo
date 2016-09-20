import { assert, expect, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);

import * as Coord from '../src/Coord';

describe('Coord', () => {
  describe('计算距离', () => {
    it('一个点到圆心的距离', () => {
      let p1: Coord.Coord2D = { x: 0, y: 0 };
      let p2: Coord.Coord2D = { x: 3, y: 4 };

      expect(Coord.distance(p1, p2)).to.equal(5);
    });
  });
});
