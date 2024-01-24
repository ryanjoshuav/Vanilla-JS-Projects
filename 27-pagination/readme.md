# Steps

## Init app steps

1. fetch followers - return array of followers
2. separate followers into separate arrays - each arrays will followersPerPage no. of followers
3. render followers and buttons
4. add event listener to page buttons

# paginating followers list

1. receive fetched followers list
2. set followers per page and total number of pages
   - total no of pages = followers length / followers per page
3. create paginated array using Array.from

## Render users steps

1. receive paginated followers list to render
2. map over the followers list
3. set the inner html of container

## Render buttons steps

1. receive btn container, list of followers to render and the the index of the active page
2. map over the list of followers and use index to render button number
   - if current index is equal to the index of active index add active-btn class to button element
3. push "next" button
4. unShift 'prev' button
5. set the inner html of btn container
