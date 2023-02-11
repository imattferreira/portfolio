function main(config, fns) {
  let result = null;

  for (const fn of fns) {
    if (result === null) {
      result = fn(config);
    } else {
      result = fn(result);
    }
  }

  return result;
}

module.exports = main;
