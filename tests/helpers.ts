// Generate Random String
export function generateRandomString(prefix = 'string') {
  return `${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;
}