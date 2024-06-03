import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ItensState = {
  itens: Produto[]
}

const initialState: ItensState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'itens_favorito',
  initialState,
  reducers: {
    adicionarItemfavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((item) => item.id === produto.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarItemfavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
