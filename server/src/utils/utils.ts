export interface Comment {
  author: string;
  likes: number;
  profilePic: string;
  text: string
}

export interface Metadata {
  priority: number;
  publishDate: Date
}

export interface TextData {
  author: { first: string; last: string };
  body: string;
  subTitle: string;
  title: string;
}

export interface ContentCardType {
  comments: Comment[];
  id: string;
  imageUri: string;
  metadata: Metadata;
  textData: TextData;
}

export interface NormalizedContentCardType {
  comments: Comment[];
  id: string;
  imageUri: string;
  body: string;
  subTitle: string;
  title: string;
  author: string
  priority: number;
  publishDate: Date
}

export function sortData(data: NormalizedContentCardType[]) {
  return data.sort((a: NormalizedContentCardType, b: NormalizedContentCardType) => b.priority - a.priority);
}

export function transformData(rawData: { contentCards: ContentCardType[] }) {
  return rawData.contentCards.map((card: ContentCardType) => ({
    id: card.id,
    title: card.textData.title,
    subTitle: card.textData.subTitle,
    imageUri: card.imageUri,
    body: card.textData.body,
    author: `${card.textData.author.first} ${card.textData.author.last}`,
    priority: card.metadata.priority,
    comments: card.comments,
    publishDate: card.metadata.publishDate

  }));
}

export function processData(rawData: { contentCards: ContentCardType[] }) {
  const transformedData = transformData(rawData);
  const processedData = sortData(transformedData);

  return processedData;
}



