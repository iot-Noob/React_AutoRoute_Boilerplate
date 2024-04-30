import { useEffect } from 'react';

const importAll = (r) => {
  const files = r.keys().map((key) => ({
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
    component: r(key).default,
  }));
  
  const folders = r.keys().filter((key) => key.indexOf('/') !== -1 && key.endsWith('/')).map((folder) => {
    const folderName = folder.substr(1).replace(/\/$/, '').toLowerCase().replace(/\(|\)/g, ''); // Remove parentheses
    const folderFiles = importAll(require.context(`../pages/${folderName}`, true, /\.js$/));
    
    return folderFiles.map((file) => ({
      path: `${folderName}/${file.path}`,
      name: file.pageTitle,
      component: file.component,
       
   
    }));
  }).flat();

  return [...files, ...folders];
};

const routes = importAll(require.context('../pages', true, /\.js$/));
 
export { routes };
