const defaultAwesomeFunction = (name) => {
  const returnStr = `Testing default function - ${name}`;
  return returnStr;
};

const awesomeFunction = () => 'I am just an Awesome Function';

export default defaultAwesomeFunction;

export { awesomeFunction };
