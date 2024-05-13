export function sortData(data: any): any {
  return data.sort((a: any, b: any) => a.priority - b.priority);
}

export function transformData(rawData: any): any {
  return rawData.contentCards.map((card: any) => ({
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

export function processData(rawData: any) {
  const transformedData = transformData(rawData);
  const processedData = sortData(transformedData);

  return processedData;
}



