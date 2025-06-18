document.addEventListener('DOMContentLoaded', () => {
  // Инициализация Swiper
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 5000,
    },
  });

  // Плавная прокрутка к форме заказа
  const orderBtn = document.getElementById('orderBtn');
  const orderForm = document.getElementById('orderForm');

  if (orderBtn && orderForm) {
    orderBtn.addEventListener('click', () => {
      orderForm.scrollIntoView({ behavior: 'smooth' });
    });
  }
});