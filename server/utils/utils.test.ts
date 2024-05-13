import { sortData, transformData, processData } from './utils';

describe('sortData', () => {
    it('should sort data by priority', () => {
        const data = [
            { id: 1, priority: 2 },
            { id: 2, priority: 1 },
            { id: 3, priority: 3 }
        ];
        const sortedData = [
            { id: 2, priority: 1 },
            { id: 1, priority: 2 },
            { id: 3, priority: 3 }
        ];
        expect(sortData(data)).toEqual(sortedData);
    });

});

describe('transformData', () => {
    it('should transform raw data into a normalized structure', () => {
        const rawData = {
            contentCards: [
                {
                    id: '1',
                    textData: { title: 'Title', subTitle: 'Subtitle', body: 'Body', author: { first: 'John', last: 'Doe' } },
                    imageUri: 'https://example.com/image.jpg',
                    metadata: { priority: 1, publishDate: '2022-01-01' },
                    comments: [{ text: 'Comment', author: 'Jane', profilePic: 'https://example.com/profile.jpg', likes: 0 }]
                }
            ]
        };
        const expectedData = [
            {
                id: '1',
                title: 'Title',
                subTitle: 'Subtitle',
                imageUri: 'https://example.com/image.jpg',
                body: 'Body',
                author: 'John Doe',
                priority: 1,
                comments: [{ text: 'Comment', author: 'Jane', profilePic: 'https://example.com/profile.jpg', likes: 0 }],
                publishDate: '2022-01-01'
            }
        ];
        expect(transformData(rawData)).toEqual(expectedData);
    });

});

describe('processData', () => {
    it('should transform and sort raw data', () => {
        const rawData = {
            contentCards: [
                { id: '1', textData: { title: 'Title', subTitle: 'Subtitle', body: 'Body', author: { first: 'John', last: 'Doe' } }, imageUri: 'https://example.com/image.jpg', metadata: { priority: 2, publishDate: '2022-01-01' }, comments: [] },
                { id: '2', textData: { title: 'Title', subTitle: 'Subtitle', body: 'Body', author: { first: 'Jane', last: 'Doe' } }, imageUri: 'https://example.com/image.jpg', metadata: { priority: 1, publishDate: '2022-01-01' }, comments: [] }
            ]
        };
        const expectedData = [
            {
                id: '2',
                title: 'Title',
                subTitle: 'Subtitle',
                imageUri: 'https://example.com/image.jpg',
                body: 'Body',
                author: 'Jane Doe',
                priority: 1,
                comments: [],
                publishDate: '2022-01-01'
            },
            {
                id: '1',
                title: 'Title',
                subTitle: 'Subtitle',
                imageUri: 'https://example.com/image.jpg',
                body: 'Body',
                author: 'John Doe',
                priority: 2,
                comments: [],
                publishDate: '2022-01-01'
            }
        ];
        expect(processData(rawData)).toEqual(expectedData);
    });

});
