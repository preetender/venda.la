import {
  categorias as mlb_categorias,
  subcategorias as mlb_subcategorias
} from "../../services/mercado_livre"

export default {
  /**
   * Obter lista de categorias.
   *
   * @param {*} commit
   */
  async ["load-categories"]({commit, getters}) {
    // caso ja tenha sido carregado uma vez.
    if (getters["loaded"]) return Promise.resolve()

    try {
      const {data, statusText} = await mlb_categorias()
      //
      commit("set-items", data)
      //
      return Promise.resolve(statusText)
    } catch (error) {
      //
      return Promise.reject(error)
    }
  },
  /**
   * Obter lista de categorias filhas.
   *
   * @param {*} commit
   */
  async ["load-child-category"]({commit}, payload) {
    const {id} = payload
    try {
      const {data, statusText} = await mlb_subcategorias(id),
        childs = data.children_categories.map((h) => {
          //
          h.children = []
          //
          return h
        })
      //
      commit("push-children", {id, childs})
      //
      return Promise.resolve(statusText)
    } catch (error) {
      //
      return Promise.reject(error)
    }
  }
}
