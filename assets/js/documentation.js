function getDocumentation(hash) {
  if (isNaN(hash)) return;
}

window.onhashchange = getDocumentation(window.location.hash);
