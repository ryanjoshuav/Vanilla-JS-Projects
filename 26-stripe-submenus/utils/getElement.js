const getElement = (className) => {
  const element = document.querySelector(`${className}`);
  if (element) return element;
  throw new Error(
    `Element not found: Please check class if ${className} is correct`
  );
};
export default getElement;
