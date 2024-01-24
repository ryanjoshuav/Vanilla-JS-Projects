# Comfy store app

## Pages

- home/index
- about
- products
- single product

## Scripts

### All pages

- init
  - render sidebar note: appears at small screen
    - add event listener to toggle and close btn
  - toggle cart
    - add event listener to cart toggle and close button
  - setup cart
    - get cart list from storage, empty array if none
    - get item total item count
    - get total price
    - render cart items in the overlay
      -receives cart list
    - add event listeners to cart parent element
      - check if remove btn is clicked
      - check if increase or decrease btn is clicked
      - get total item count, total price
      - set cart list to local storage

### index

- init

  - fetch products

  - setup store

    - get: id, featured, name, price, company, colors, image
    - save to local storage

  - render featured

### products

- init

  - fetch products
  - setup store

    - get: id, featured, name, price, company, colors, image
    - save to local storage

  - render products

    - receives product list, container element and boolean of filter
    - render products to the DOM

    - check if filter so event listeners wont stack up
    - clicking search icon button/link links to single product page
    - add event listener to cart button
      - passes the id data set

  - set up search

    - receives product list
    - get form and input element
    - add key up event
      - get value of input element
      - filter product list with value matching the product name
      - if filtered list returns no product display error
      - render filtered products: pass filtered product list, container, and true for filter boolean
      - if input element has no value, render all products

  - set up company filter

    - receives product list
    - create companies array
    - render company list inside companies container
    - add event listener to companies container
      - if target is all show all companies
      - filter products per company
      - render filtered products: pass filtered product list, container and true for filter boolean

  - price filters

    - receives product list
    - get price-filter an input type:"range" element and value paragraph
    - map within the product list and get prices
    - get highest price and set value paragraph and price inputs max the highest price
    - add input event listener to price-filter
      - get value
      - filter product list and return products which has price less than or equal the value
      - render product list: pass filtered product list, container and true for filter boolean
      - if filtered product list returns no products display error

### single product

- init
  - get id using window.location.search: '?id=rec43w3ipXvP28vog'
  - fetch single product using single product url and add the id
  - render single product
  - add click listener to add to cart button

### utils

- add to cart

  - receives id
  - check if item with the received id exists
    - if it doesn't exists
      - add to cart list
      - render cart item to cart list
    - if it already exist
      - increase item amount in the cart
    - get and render total item count and total price
    - save cart to local storage
    - open cart-overlay

- get element

  - get element using query selector
  - throw error if no element exists

- format price

  - receives price
  - format price using 'new Intl.NumberFormat'

- get item from local storage

  - receives key
  - if item with given key doesn't exist return empty array

- set item to local storage
  - receives key and the item list
  - set item to local storage

## urls

- allProductsUrl: 'https://course-api.com/javascript-store-products'
  // 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
- singleProductUrl: 'https://course-api.com/javascript-store-single-product'
