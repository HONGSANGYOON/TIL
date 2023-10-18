function solution(strings, n) {
  let result = [];
}

for (let i = 0; i < strings.lenght; i++) {
  strings[i] = strings[i][n] + strings[i];

  strings.sort();

  console.log(strings);

  for (let j = 0; j < strings.lenght; j++)
    strings[j] = strings[j].replace(strings[j][0], "");
  result.push(strings[i]);
  return result;
}
