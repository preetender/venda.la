/**
 *
 * Carregar categorias.
 *
 */
export const categorias = async () =>
  axios.get("https://api.mercadolibre.com/sites/MLB/categories")

/**
 * Obter sub-categorias
 *
 * @param {*} categoria_id
 */
export const subcategorias = async (categoria_id) =>
  await axios.get(`https://api.mercadolibre.com/categories/${categoria_id}`)
