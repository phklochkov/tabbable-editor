import { connect } from 'react-redux'
import { Tabs } from '../components/Tabs'
import * as TabsActions from '../actions/tabs'

const mapStateToProps = (state, props) => ({
  tabs: state.tabs
})

const mapDispatchToProps = (dispatch) => ({
  handleAdd: (id) => dispatch(TabsActions.addItem(id)),
  handleRemove: (id) => dispatch(TabsActions.removeItem(id)),
  handleSelect: (id) => dispatch(TabsActions.selectItem(id)),
  handleDrop: (payload) =>
    dispatch(TabsActions.changeItemPosition(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
