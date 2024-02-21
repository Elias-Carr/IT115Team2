function showAlt(element) {
  var altText = element.alt;
  var altParagraph = document.getElementById('alttext');
  altParagraph.textContent = altText;
  altParagraph.style.display = 'block'; 
}

function hideAlt() {
  var altParagraph = document.getElementById('alttext');
  altParagraph.textContent = '';
  altParagraph.style.display = 'none'; 
}
