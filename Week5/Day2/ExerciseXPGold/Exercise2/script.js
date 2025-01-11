document.querySelector('input[type="button"]').addEventListener("click", removecolor);

function removecolor() {
  const colorSelect = document.getElementById("colorSelect");
  colorSelect.options[colorSelect.selectedIndex].remove();
}