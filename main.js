const filters = document.querySelectorAll('.filter-tablet')
const filterBar = document.querySelector('#filter-bar')

filterBar.style.display = 'none'

//filterBar.className += ' md:hidden'
console.log(filterBar.className)

const filterAction = (filterName) => {}

for (const filter of filters) {
    filter.addEventListener('click', () => {console.log(filter.innerText)} )
}
