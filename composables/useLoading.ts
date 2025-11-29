export const useLoading = () => {
  const isLoading = useState('isLoading', () => true)
  const progress = useState('loadingProgress', () => 0)
  let progressInterval: any = null

  const startLoading = () => {
    isLoading.value = true
    progress.value = 0
    
    // Clear any existing interval
    if (progressInterval) clearInterval(progressInterval)
    
    // Simulate progress
    progressInterval = setInterval(() => {
      if (progress.value < 90) {
        // Random increment between 1 and 5
        const increment = Math.floor(Math.random() * 5) + 1
        progress.value = Math.min(progress.value + increment, 90)
      }
    }, 200)
  }

  const stopLoading = () => {
    if (progressInterval) clearInterval(progressInterval)
    progress.value = 100
    
    // Small delay to show 100% before hiding
    setTimeout(() => {
      isLoading.value = false
    }, 200)
  }

  return {
    isLoading,
    progress,
    startLoading,
    stopLoading
  }
}
