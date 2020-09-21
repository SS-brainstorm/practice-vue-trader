export const loadData = ({ commit }) => {
  const data = localStorage.getItem('data');

  if (data) {
    const { stocks, funds, stockPortfolio } = JSON.parse(data);

    commit('SET_PORTFOLIO', { stockPortfolio, funds });
    commit('SET_STOCKS', stocks);
  }
}
