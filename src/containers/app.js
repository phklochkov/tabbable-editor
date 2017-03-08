import { connect } from 'react-redux'
import { App } from '../components/App'

const mapStateToProps = (state, props) => ({
  app: state.app
})

export default connect(mapStateToProps)(App)
