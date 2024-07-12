// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Array of emoji codes
  const emojiArray = [
    '&#128512;', '&#128513;', '&#128514;', '&#128515;',
    '&#128516;', '&#128517;', '&#128518;', '&#128519;',
    '&#128520;', '&#128521;', '&#128522;', '&#128523;',
    '&#128524;', '&#128525;', '&#128526;', '&#128527;',
    '&#128528;', '&#128529;', '&#128530;', '&#128531;',
    '&#128532;', '&#128533;', '&#128534;', '&#128535;',
    '&#128536;', '&#128537;', '&#128538;', '&#128539;',
    '&#128540;', '&#128541;', '&#128542;', '&#128543;',
    '&#128544;', '&#128545;', '&#128546;', '&#128547;',
    '&#128548;', '&#128549;', '&#128550;', '&#128551;',
    '&#128552;', '&#128553;', '&#128554;', '&#128555;',
    '&#128556;', '&#128557;', '&#128558;', '&#128559;',
    '&#128560;', '&#128561;', '&#128562;', '&#128563;',
    '&#128564;', '&#128565;', '&#128566;', '&#128567;'
];


  // Get the gallery section by its ID
  const gallery = document.getElementById('emoji-gallery');

  // Loop through the emoji array
  emojiArray.forEach(emojiCode => {
      // Create a div to hold each emoji
      const emojiWrapper = document.createElement('div');
      emojiWrapper.classList.add('emoji');

      // Create a span to display the emoji
      const emojiSpan = document.createElement('span');
      emojiSpan.innerHTML = emojiCode;

      // Create a code element to display the emoji's code
      const emojiCodeElement = document.createElement('code');
      emojiCodeElement.textContent = emojiCode.replace(/&#|;/g, '');

      // Append the span and code elements to the div
      emojiWrapper.appendChild(emojiSpan);
      emojiWrapper.appendChild(emojiCodeElement);

      // Append the div to the gallery section
      gallery.appendChild(emojiWrapper);
  });
});