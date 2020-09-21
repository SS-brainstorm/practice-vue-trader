import stocks from "../../data/stocks";

const state = {
  stocks: []
};

const getters = {
  /**
   * Get stocks items
   * @param state
   * @returns []
   */
  stocks: state => {
    return state.stocks;
  },
};

const mutations = {
  'SET_STOCKS': (state, stocks) => {
    state.stocks = stocks;
  },

  /**
   * Change stock prices.
   * @param state
   */
  'RANDOM_STOCKS': (state) => {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    })
  }
};

const actions = {
  /**
   * But stock action.
   * @param commit
   * @param order
   */
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },

  /**
   * Init stocks action.
   * @param commit
   */
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },

  /**
   * Random stock prices action.
   * @param commit
   */
  randomStocks: ({ commit }) => {
    commit('RANDOM_STOCKS');
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
