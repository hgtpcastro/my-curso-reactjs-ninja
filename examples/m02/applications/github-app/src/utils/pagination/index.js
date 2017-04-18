'use strict'

const pagination = ({ total, activePage }) => {
  // let pages = []
  // for (let i = 0; i < total; i++) {
  //   pages.push(i + 1)
  // }

  // return pages

  // ES5
  // return Array.apply(null, { length: total }).map((_, i) => i + 1)

  // ES6
  return Array.from({ length: total }, (_, i) => i + 1)
}

export default pagination
