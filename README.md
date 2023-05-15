# static-job-listings

HTML, JavaScript and TailwindCss were used for this project.

Few things I struggled with:
1. Getting the box shadow right on the job listings 
2. Making the job listings move down when the filter bar increases in height when a lot of filter tablets are clicked in mobile mode.
3. Having the filter bar's width change in length dynamically as the page gets wider or narrower in desktop mode.

Things I learned:
1. How to use custom styles within TailwindCSS and using the config file
2. Apparently reusing styles with @apply is not good as the abstraction takes away from what Tailwind is all about.
3. In the javaScript file, instead of using element.style.something = 'somethingElse', can just use element.classList to add, edit and delete styles

Things that I can still do:
1. Make the filters tablets (with the cross image) inside the filter bar have the correct order when removed and then added again.
2. Add transitions when things change.
