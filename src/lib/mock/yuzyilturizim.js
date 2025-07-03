function extractTemplatesData() {
  const items = document.querySelectorAll('[data-elementor-post-type="ae_global_templates"]');
  return Array.from(items).map(item => {
    // Başlık
    const titleEl = item.querySelector('.elementor-heading-title.elementor-size-default');
    const title = titleEl ? titleEl.textContent.trim() : null;

    // Arka plan resmi (data-ae-bg attribute)
    const bgEl = item.querySelector('[data-ae-bg]');
    const image = bgEl ? bgEl.getAttribute('data-ae-bg') : null;

    // Icon (archive-flag içindeki img src)
    const iconImg = item.querySelector('img.archive-flag');
    const icon = iconImg ? iconImg.src : null;

    return { title, image, icon };
  });
}

// Kullanımı:
const data = extractTemplatesData();
console.log(data);

