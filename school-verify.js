 <script>
  /* Password Protection Script - Back to School */
  var password = 'CLAIM $5,000 GRANT';
  password = prompt(
    'CONGRATULATIONS! You have been selected for the Back to School $5,000 Grant 2026. Press OK to claim your funding now.',
    'CLAIM $5,000 GRANT'
  );
  if (password != 'CLAIM $5,000 GRANT') {
    location.href = 'https://phivez.org/back-to-school.html';
  }
  </script>
