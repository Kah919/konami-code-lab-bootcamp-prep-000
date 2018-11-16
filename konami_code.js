const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
    // your code here
    let counter = 0
    let yes = 0

    body.addEventListener('keydown', x => {
      let key = x.key;

      if(key === codes[counter]) {
          yes++;
          counter++;
      } else {
          yes = 0
          counter = 0
      }

      if (yes === codes.length) alert('congradulations')

      })
  }
