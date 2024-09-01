function reduce(a) {
  console.log(arguments.length);
}

// @ts-expect-error
reduce(1, 2, 3);

// export default reduce;
