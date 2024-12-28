// In-memory storage for click count
let clickCount = 0;

export interface ClickCountResponse {
  count: number;
  timestamp: string;
}

/**
 * Mock API function to track click counts
 * @returns Promise<ClickCountResponse>
 */
export async function incrementClickCount(): Promise<ClickCountResponse> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Increment count
  clickCount += 1;
  
  return {
    count: clickCount,
    timestamp: new Date().toISOString()
  };
}

/**
 * Reset click count (useful for testing)
 */
export function resetClickCount(): void {
  clickCount = 0;
}
