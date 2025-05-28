function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('expanded');
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('announcements.php')
    .then(res => res.text())
    .then(data => {
      document.getElementById('announcements').innerHTML = data;
    });
});