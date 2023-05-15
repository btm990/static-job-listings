const filters = document.querySelectorAll('.filter-tablet')
const listItems = document.querySelectorAll('.li-item')
const filterBar = document.querySelector('.filter-bar')
const filterWrapper = document.querySelector('#filter-wrapper')
const filterBarItems = document.querySelector('#filter-bar-items')
const clear = document.querySelector('#clear')
const filterCrosses = document.querySelectorAll('#filter-bar-items img')

const filterTagNames = []
let order = 1

const reset = () => {
    filterTagNames.length = 0
    for (const name of filterBarItems.children) {
        filterTagNames.push(name.textContent.trim())
        name.style.display = 'none'
        filterBar.style.display = 'none' 
        filterWrapper.style.margin = '0 0 0 0'
        filterWrapper.style.padding = '0 0 0 0'
    }
    for (const li of listItems) {
        li.style.order = '0'
        li.style.display = 'flex'
    }
    filterWrapper.style.height = ''
}

reset()

console.log(listItems)

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const listAction = (filterName) => {
    for (const li of listItems) {
        if (!li.dataset.role.includes(filterName.toLowerCase()) && !li.dataset.level.includes(filterName.toLowerCase()) && !li.dataset.languages.includes(filterName.toLowerCase())) {
            li.style.order = '1'
            li.style.display = 'none'
        }
    }
    filterWrapper.style.height = `${filterBar.offsetHeight/2}px`
}

const filterClearListAction = (filterName) => {
    for (const li of listItems) {
        li.style.order = '0'
        li.style.display = 'flex'
        if (!li.dataset.role.includes(filterName.toLowerCase()) && !li.dataset.level.includes(filterName.toLowerCase()) && !li.dataset.languages.includes(filterName.toLowerCase())) {
            li.style.order = '1'
            li.style.display = 'none'
        }
    }
}

const filterClearAction = (filterName) => {
    const childIndex = filterTagNames.indexOf(filterName.trim())
    filterBarItems.children[childIndex].style.order = '0'
    filterBarItems.children[childIndex].style.display = 'none'
    let visibleFiltersCount = 0
    for (const name of filterBarItems.children) {
        if (name.style.display != 'none') {
            filterClearListAction(name.textContent.trim())
            visibleFiltersCount += 1
        }
    }
    if (visibleFiltersCount === 0) {
        console.log(visibleFiltersCount)
        reset()
    }
    filterWrapper.style.height = `${filterBar.offsetHeight/2}px`
}

const filterAction = (filterName) => {
    const childIndex = filterTagNames.indexOf(filterName)
    filterWrapper.style.padding = '0 0 1.5rem 0'
    filterBar.style.display = 'flex'
    if (!filterBarItems.children[childIndex].style.order) {
        filterBarItems.children[childIndex].style.order = `${order}`
        order += 1
    }
    filterBarItems.children[childIndex].style.display = 'inline-flex'
    listAction(filterName)
}

clear.addEventListener('click', reset)

for (const filter of filters) {
    filter.addEventListener('click', () => {filterAction(filter.textContent)})
}

for (const crossImg of filterCrosses) {
    crossImg.addEventListener('click', () => {filterClearAction(crossImg.parentElement.textContent)})
}