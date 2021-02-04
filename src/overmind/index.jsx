import {
    createStateHook,
    createActionsHook,
    createEffectsHook,
    createReactionHook, 
    createHook,
  } from 'overmind-react' 

  import { state } from './state'
  import * as actions from './actions' 
  import * as effects from './effects'
  export const config = {
    state,
    actions, 
    effects
  }  
  export const useOvermind = createHook()
  export const useState = createStateHook()
  export const useActions = createActionsHook()
  export const useEffects = createEffectsHook()
  export const useReaction = createReactionHook() 

