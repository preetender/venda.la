export default {
  /**
   * Lista de categorias
   */
  all: (state) => state.items,

  /**
   * Verificar carregamento
   */
  loaded: (state) => !_.isEmpty(state.items)
}
