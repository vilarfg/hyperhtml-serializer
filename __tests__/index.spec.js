//

test('should remove extra hyper comments from the html', () => {
  const actual = require('fs')
    .readFileSync(__dirname + '/actual.html')
    .toString();
  const section = document.createElement('section');
  section.innerHTML = actual;
  expect(section).toMatchSnapshot();
});

test('should only act on HTML strings', () => {
  expect('Some text without any tags.').toMatchSnapshot();
  expect({}).toMatchSnapshot();
  expect([]).toMatchSnapshot();
  expect(0).toMatchSnapshot();
  expect(true).toMatchSnapshot();
  expect(() => {}).toMatchSnapshot();
});
