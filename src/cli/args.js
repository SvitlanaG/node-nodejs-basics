const parseArgs = () => {
  const clArgs = process.argv;
  let result = [];
  for (let i = 2; i < clArgs.length; i += 2) {
    const propName = clArgs[i].replace("--", "");
    const propValue = clArgs[i + 1];
    if (i + 2 < clArgs.length) {
      result.push(`${propName} is ${propValue},`);
    } else {
      result.push(`${propName} is ${propValue}`);
    }
  }

  console.log(result.join(" "));
};

parseArgs();
