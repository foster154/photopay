export function normalizeShareUrl (shareUrl) {
  console.log('normalizing!!! Original:', shareUrl)
  if (shareUrl.startsWith('http://') || shareUrl.startsWith('https://')) {
    return shareUrl
  } else {
    return `http://${shareUrl}`
  }
}
