export function transformData(data: any): any {
    return data.contentCards.sort((a:any, b:any) => a.metadata.priority - b.metadata.priority);

    return data;
  }
