import { paginate } from './utils';

describe('paginate', () => {
    it('should return the correct page of items', () => {
        const items = Array.from({ length: 20 }, (_, index) => index + 1);

        expect(paginate(items, 1, 5)).toEqual([1, 2, 3, 4, 5]);

        expect(paginate(items, 2, 5)).toEqual([6, 7, 8, 9, 10]);

        expect(paginate(items, 3, 5)).toEqual([11, 12, 13, 14, 15]);

        expect(paginate(items, 4, 5)).toEqual([16, 17, 18, 19, 20]);
    });

    it('should return nothing when page size is 0', () => {
        const items = Array.from({ length: 10 }, (_, index) => index + 1);

        expect(paginate(items, 1, 0)).toEqual([]);
    });
    it('should return nothing when page number is 0', () => {
        const items = Array.from({ length: 10 }, (_, index) => index + 1);

        expect(paginate(items, 0, 5)).toEqual([]);

    });

    it('should return the remaining items when the page size is greater than the items', () => {
        const items = Array.from({ length: 9 }, (_, index) => index + 1);

        expect(paginate(items, 2, 5)).toEqual([6, 7, 8, 9,]);
    });
});
