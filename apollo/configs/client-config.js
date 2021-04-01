import { ApolloLink, split } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getMainDefinition } from 'apollo-utilities'
import 'subscriptions-transport-ws' // this is the default of apollo-link-ws

export default (ctx) => {
  const uri = 'https://api.thegraph.com/subgraphs/name/digitalax/digitalax'
  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers
      }
    }))
    return forward(operation)
  })

  const httpLink = createHttpLink({ uri, credentials: 'same-origin' })

  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    authMiddleware,
    httpLink
  )

  return {
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true,
    defaultHttpLink: false
  }
}
