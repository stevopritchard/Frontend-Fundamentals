var elements = [
  {
    text: 'div',
    value: 'div',
  },
  {
    text: 'header',
    value: 'header',
    selected: true,
  },
  {
    text: 'nav',
    value: 'nav',
  },
];

var elementList = document.getElementById('elementGenerator');

for (element of elements) {
  console.log(element);
  elementList.options.add(
    new Option(element.text, element.value, element.selected)
  );
}
