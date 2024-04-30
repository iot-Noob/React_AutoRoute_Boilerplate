import { useEffect } from 'react';

const importAll = (paths) => {
  const allFiles = [];

  paths.forEach(path => {
    const files = path.keys().map((key) => ({
      path: key
        .substr(1)
        .replace(/\/index\.js$/, '')
        .replace(/\.js$/, '')
        .replace(/\(|\)/g, '') // Remove parentheses
        .replace(/\[([^\]]+)\]/, ':$1')
        .toLowerCase(),
      name: key
        .split('/')
        .pop() // Get the last part of the path
        .replace(/\..+$/, '') // Remove file extension
        .replace(/-/g, ' ') // Replace dashes with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()), // Capitalize each word
      component: path(key).default,
    }));

    allFiles.push(...files);
  });

  const folders = allFiles.filter((file) => file.path.indexOf('/') !== -1 && file.path.endsWith('/')).map((folder) => {
    const folderName = folder.path.substr(0, folder.path.length - 1).toLowerCase().replace(/\(|\)/g, ''); // Remove parentheses
    const folderFiles = importAll(paths.map(path => require.context(`../${path}/${folderName}`, true, /\.js$/)));
    
    return folderFiles.map((file) => ({
      path: `${folderName}/${file.path}`,
      name: file.pageTitle,
      component: file.component,
    }));
  }).flat();

  return [...allFiles, ...folders];
};

const routes = importAll([
  require.context('../pages', true, /\.js$/),
  require.context('../otherroute', true, /\.js$/)
  // Add more require.context calls here for additional folder paths
]);

export { routes };
