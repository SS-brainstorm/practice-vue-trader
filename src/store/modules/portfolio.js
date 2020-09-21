const state = {
  funds: 10000,
  currency: '$',
  stocks: []
};

const getters = {
  /**
   * Get portfolio items
   * @param state
   * @returns {(function(*): *)|[]}
   */
  stockPortfolio: (state, getters) => {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);

      return {
        id: stock.id,
        quantity: stock.quantity,
        title: record.title,
        price: record.price,
      };
    });
  },

  /**
   * Get funds value.
   * @param state
   * @returns {number}
   */
  funds: state => state.funds,

  /**
   * Get converted funds string.
   * @param funds ${number} - global funds value
   * @param currency {string} - global currency
   * @returns {string}
   */
  convertedFunds: ({ currency, funds }) => {
    const str = funds.toString();

    if (str.length === 5) {
      return `${currency} ${str.replace(str[1], `${str[1]}.`)}`;
    } else if (str.length === 4) {
      return `${currency} ${str.replace(str[0], `${str[0]}.`)}`;
    }

    return `${currency} ${funds}`;
  }
}

const mutations = {
  /**
   * Add stock to portfolio
   * @param state
   * @param payload
   */
  'BUY_STOCK': (state, { id, quantity, price }) => {
    const record = state.stocks.find(element => element.id === id);

    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id,
        quantity,
        price
      });
    }

    state.funds -= price * quantity;
  },

  'SELL_STOCK': (state, { id, quantity, price }) => {
    const record = state.stocks.find(element => element.id === id);

    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }

    state.funds += price * quantity;
  },

  'SET_PORTFOLIO': (state, { stockPortfolio, funds }) => {
    state.stocks = stockPortfolio || []
    state.funds = funds;
  }
};

const actions = {
  sellStock: ({ commit }, order) => {
    commit('SELL_STOCK', order);
  }
};

export default {
  state,
  mutations,
  getters,
  actions
}
