import { fetchContentCards } from './helper';
import { ContentCardType } from '../types/types';

describe('fetchContentCards', () => {
    const mockData: ContentCardType[] = [
        {
            id: '1',
            imageUri: 'https://example.com/image.jpg',
            title: 'Title 1',
            subTitle: 'Subtitle 1',
            body: 'Body 1',
            author: 'John Doe',
            priority: 1, publishDate: new Date(),
            comments: []
        }
    ];
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: () => Promise.resolve(mockData)
        } as Response);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('should return content cards', async () => {
        const contentCards = await fetchContentCards();

        expect(fetch).toHaveBeenCalledWith('http://localhost:5000/api/content');
        expect(contentCards).toEqual(mockData);
    });

    test('should return empty array on fetch error', async () => {
        jest.spyOn(console, 'error').mockImplementation(() => { });
        (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValue(new Error('Fetch error'));

        const contentCards = await fetchContentCards();

        expect(fetch).toHaveBeenCalledWith('http://localhost:5000/api/content');
        expect(contentCards).toEqual([]);
    });
});
