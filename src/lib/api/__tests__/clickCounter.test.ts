import { incrementClickCount, resetClickCount, ClickCountResponse } from '../clickCounter';

describe('clickCounter', () => {
  beforeEach(() => {
    // Reset the click count before each test
    resetClickCount();
  });

  it('should increment click count', async () => {
    const firstClick: ClickCountResponse = await incrementClickCount();
    expect(firstClick.count).toBe(1);
    
    const secondClick: ClickCountResponse = await incrementClickCount();
    expect(secondClick.count).toBe(2);
  });

  it('should include timestamp in response', async () => {
    const response = await incrementClickCount();
    expect(response.timestamp).toBeTruthy();
    expect(new Date(response.timestamp).getTime()).not.toBeNaN();
  });

  it('should maintain count between calls', async () => {
    await incrementClickCount();
    await incrementClickCount();
    const thirdClick = await incrementClickCount();
    expect(thirdClick.count).toBe(3);
  });

  it('should reset count when resetClickCount is called', async () => {
    await incrementClickCount();
    await incrementClickCount();
    resetClickCount();
    const newClick = await incrementClickCount();
    expect(newClick.count).toBe(1);
  });
});
