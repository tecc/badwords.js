function getDocumentation(hash) {
  if (isNaN(hash)) return;
  let file = hash.replace("#", "");

}

window.onhashchange = getDocumentation(location.hash);
