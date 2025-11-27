export const useAssetLoading = () => {
  const withTimeout = <T>(promise: Promise<T>, timeoutMs: number = 10000, fallbackValue: T): Promise<T> => {
    let timeoutId: any
    const timeoutPromise = new Promise<T>((resolve) => {
      timeoutId = setTimeout(() => {
        console.warn(`Asset loading timed out after ${timeoutMs}ms`)
        resolve(fallbackValue)
      }, timeoutMs)
    })

    return Promise.race([
      promise.then((val) => {
        clearTimeout(timeoutId)
        return val
      }),
      timeoutPromise
    ])
  }

  const waitForImages = (srcs: string[]) => {
    const promises = srcs.map((src) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve(src)
        img.onerror = () => resolve(src) // Resolve anyway to avoid blocking
      })
    })
    return withTimeout(Promise.all(promises), 10000, [] as any)
  }

  const waitForVideo = (videoEl: HTMLVideoElement | null) => {
    const promise = new Promise((resolve) => {
      if (!videoEl) {
        resolve(true)
        return
      }
      if (videoEl.readyState >= 3) {
        resolve(true)
      } else {
        const onLoaded = () => {
            cleanup()
            resolve(true)
        }
        const onError = () => {
            cleanup()
            resolve(true)
        }
        
        const cleanup = () => {
            videoEl.removeEventListener('canplaythrough', onLoaded)
            videoEl.removeEventListener('error', onError)
            videoEl.removeEventListener('loadeddata', onLoaded)
        }

        videoEl.addEventListener('canplaythrough', onLoaded)
        videoEl.addEventListener('loadeddata', onLoaded) // Fallback
        videoEl.addEventListener('error', onError)
      }
    })
    return withTimeout(promise, 10000, true)
  }

  const waitForFonts = () => {
    return withTimeout(document.fonts.ready, 5000, true as any)
  }

  return {
    waitForImages,
    waitForVideo,
    waitForFonts
  }
}
