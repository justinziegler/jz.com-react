const mobile = window.innerWidth < 992;
const vpMobile = (window.screen.width <= 500 && window.screen.height <= 880);
const cats = [
  {
    title: 'Products',
    target: 1,
    class: 'cat1'
  },
  {
    title: 'Promos',
    target: 7,
    class: 'cat2'
  },
  {
    title: 'Checkout',
    target: 15,
    class: 'cat3'
  },
  {
    title: 'More',
    target: 21,
    class: 'cat4'
  },
]
const scrollTime = (e) => {
  e.preventDefault();
  document.querySelector('#recently')
  .scrollIntoView({ behavior: 'smooth', block: 'end' })
}
// new stuff below


export { mobile, vpMobile, cats, scrollTime };
