export const useAssetLoading = () => {
  const waitForImages = (srcs: string[]) => {
    const promises = srcs.map((src) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve(src)
        img.onerror = () => resolve(src) // Resolve anyway to avoid blocking
      })
    })
    return Promise.all(promises)
  }

  const waitForVideo = (videoEl: HTMLVideoElement | null) => {
    return new Promise((resolve) => {
      if (!videoEl) {
        resolve(true)
        return
      }
      if (videoEl.readyState >= 3) {
        resolve(true)
      } else {
        videoEl.oncanplaythrough = () => resolve(true)
        videoEl.onerror = () => resolve(true)
      }
    })
  }

  const waitForFonts = () => {
    return document.fonts.ready
  }

  return {
    waitForImages,
    waitForVideo,
    waitForFonts
  }
}
