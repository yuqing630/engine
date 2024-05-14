import { ContentCardType } from "../types/types";

export async function fetchContentCards(): Promise<ContentCardType[]> {
    try {
        const response = await fetch("http://localhost:5000/api/content");
        const data = await response.json();
        return data || [];
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
