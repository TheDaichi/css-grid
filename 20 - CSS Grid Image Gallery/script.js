(function () {
  const gallery = document.querySelector('.gallery');
  const overlay = document.querySelector('.overlay');
  const overlayImage = overlay.querySelector('img');
  const close = overlay.querySelector('button');

  function genHTML([h, v]) {
    return `
    <div class="item h${h} v${v}">
      <img class="item-image" src="images/${random(12)}.jpg">
      <div class="item__overlay">
        <button>View More -></button>
      </div>
    </div>
  `;
  }

  function random(l) {
    return Math.floor(Math.random() * l) + 1;
  }

  const digits = Array.from({ length: 50 }, () => [
    random(4),
    random(4),
  ]).concat([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2],
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
  ]);
  const html = digits.map(genHTML).join('');
  gallery.innerHTML = html;

  const items = Array.from(document.querySelectorAll('.item'));
  items.map((item) => item.addEventListener('click', handleViewMore));
  function handleViewMore(e) {
    overlay.classList.add('open');
    overlayImage.src = e.currentTarget.querySelector('img').src;
  }
  close.addEventListener('click', () => {
    overlay.classList.remove('open');
  });
})();
