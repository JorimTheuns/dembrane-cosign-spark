import "@styles/globals.css";

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Application;

export function getSiblingValue(searchKey, searchValue, targetKey, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(searchKey)) {
      if (array[el][searchKey] == searchValue) {
        return array[el][targetKey];
      }
    }
  }
}
