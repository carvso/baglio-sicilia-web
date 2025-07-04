
// Utility functions for handling GitHub Pages paths
export const getBasePath = () => {
  return import.meta.env.BASE_URL || '/';
};

export const getAssetPath = (path: string) => {
  const basePath = getBasePath();
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${basePath}${cleanPath}`;
};

export const getLovableUploadPath = (filename: string) => {
  return getAssetPath(`lovable-uploads/${filename}`);
};
