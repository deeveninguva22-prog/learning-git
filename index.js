<!DOCTYPE html>
<html>
<head>
  <title>Counter Example</title>
</head>
<body>
  <h2>Click Counter</h2>
  <button id="counterBtn">Clicked 0 times</button>

  <script>
    let count = 0;
    const button = document.getElementById('counterBtn');

    button.addEventListener('click', () => {
      count++;
      button.textContent = `Clicked ${count} times`;
    });
  </script>
</body>
</html>
