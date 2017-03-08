import { combineReducers } from 'redux'
import { app } from './app'
import { tabs } from './tabs'
import { editor } from './editor'

const state = combineReducers({
  app,
  tabs,
  editor
})

export { state }
