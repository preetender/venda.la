const filter = (items, id) => {
  //
  if (typeof items !== "object") return false

  let find = _.find(items, (h) => h.id === id)

  if (find) {
    //
    return find
  }

  let i = 0

  do {
    //
    if (!items[i]) break

    //
    let test = filter(items[i].children, id)

    //
    if (test) {
      //
      return test
    }

    i++
  } while (i <= items.length)
}

export default {
  /**
   * @param state
   * @param items
   */
  ["set-items"]: (state, items) => {
    state.items = items.map((category) => {
      //
      category.children = []
      //
      return category
    })
  },

  /**
   * Anexar categorias na arvore familiar.
   *
   * @param state
   * @param data
   */
  ["push-children"]: (state, data) => {
    //
    const {childs, id} = data
    //
    let find = filter(state.items, id)

    if (find) {
      find.children = childs
    }
  }
}
