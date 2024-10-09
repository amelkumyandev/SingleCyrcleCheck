function hasSingleCycle(array) {
  const n = array.length;
    let visitedCount = 0;
    let currentIndex = 0;
    
    // Loop until we visit all elements or find a condition that invalidates a cycle
    while (visitedCount < n) {
        if (visitedCount > 0 && currentIndex === 0) {
            return false;
        }
        
        visitedCount++;
        
        // Get the next index by moving `array[currentIndex]` steps
        let nextIndex = (currentIndex + array[currentIndex]) % n;
        
        // Handling negative wrapping
        if (nextIndex < 0) {
            nextIndex += n;
        }
        
        // Move to the next index
        currentIndex = nextIndex;
    }
    
    // To have a valid single cycle, we must end at the starting index
    return currentIndex === 0;
}
