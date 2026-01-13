/**
 * Base path for GitHub Pages deployment
 * This matches the basePath in next.config.js
 */
const BASE_PATH = '/Portfolio'

/**
 * Create a path with basePath included for GitHub Pages
 * This ensures links work correctly in static export mode
 */
export const createPath = (path: string): string => {
  // Check if we're running on GitHub Pages (has /Portfolio in path)
  let basePath = ''
  if (typeof window !== 'undefined') {
    // Client-side: check if current URL includes the basePath
    if (window.location.pathname.startsWith(BASE_PATH)) {
      basePath = BASE_PATH
    }
  } else {
    // Server-side/build-time: use production basePath
    basePath = process.env.NODE_ENV === 'production' ? BASE_PATH : ''
  }
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  // Combine basePath and path
  return `${basePath}${cleanPath}`
}
