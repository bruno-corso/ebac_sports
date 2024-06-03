import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ItensState = {
  itens: Produto[]
}

const initialState: ItensState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'itens_carrinho',
  initialState,
  reducers: {
    adicionarItemCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((item) => item.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarItemCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
