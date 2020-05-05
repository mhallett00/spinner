let delay = 0;
const spinnerArr = ['| ', '\\ ', '- ', '/ ', '| ', '\\ ', '- ', '/ ', '| '];

for (const char of spinnerArr) {
  setTimeout (() => process.stdout.write(`\r${char}`), delay);
  delay += 200;
};

setTimeout(() => process.stdout.write('\n'), delay);
