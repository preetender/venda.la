/**
 * Listar produtos
 */
export const findAll = async (page = 1, perPage = 6) =>
  await axios.get(`api/products/?page=${page}&perPage=${perPage}`)

/**
 * Cadastrar produto
 *
 * @param {*} data
 */
export const store = async (data) => await axios.post("api/products", data)

/**
 * Remover Produto
 *
 * @param {*} id
 */
export const destroy = async (id) => await axios.delete(`api/products/${id}`)
