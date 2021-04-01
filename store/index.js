import GenesisContributorById from '@/apollo/queries/genesis-contributor-by-id'
import Web3 from 'web3'
/**
 * initial state
 */
const state = () => ({
  transactionDetail: [],
  account: '',
  contributedEth: 0,
  popupclosed: true,
  linkImage: '',
  receipt: {}
})

/**
 * initial getters
 */
const getters = {
  getAccountWallet: (state) => {
    return state.account
  }
}

/**
 * initial actions
 */
const actions = {
  // GET Industry Sentiment
  async getTransactionDetail ({ commit }, { app, ids }) {
    try {
      const result = await app.defaultClient.query({
        query: GenesisContributorById,
        variables: {
          id: ids
        }
      })
      if (!result) { return }
      if (result.data.genesisContributors[0]) {
        commit(
          'setContributedEth',
          result.data.genesisContributors[0].totalContribtuionInWei
        )
        commit('setTransactionDetail', result.data.genesisContributors[0])
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
}

/**
 * initial mutations
 */
const mutations = {
  setTransactionDetail (state, data) {
    state.transactionDetail = data
  },
  setAccountWallet (state, account) {
    state.account = account
  },
  setReceipt (state, receipt) {
    state.receipt = receipt
  },
  setContributedEth (state, eth) {
    state.contributedEth = Web3.utils.fromWei(`${eth}`, 'ether')
  },
  setContributedEthByNumb (state, eth) {
    state.contributedEth = eth
  },
  setPopupclosed (state, status) {
    state.popupclosed = status
  },
  setLinkImage (state, link) {
    state.linkImage = link
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
