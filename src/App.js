import {useState, createContext, useReducer} from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import LifecycleExample from './components/LifecycleExample';
import EffectHook from './components/EffectHook';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import DataFetchingTwo from './components/DataFetchingTwo';
import ComponentC from './components/ComponentC';
import UsereducerHookCounter from './components/UsereducerHookCounter';
import UsereducerHookCounterTwo from './components/UsereducerHookCounterTwo';
import UsereducerHookCounterThree from './components/UsereducerHookCounterThree';
import ComponentD from './components/ComponentD';
import ComponentE from './components/ComponentE';
import ComponentF from './components/ComponentF';
import DataFetchingUsereducer from './components/DataFetchingUsereducer';
import DataFetchingUsereducerTwo from './components/DataFetchingUsereducerTwo';
import ParentComponent from './components/UsecallbackComponent/ParentComponent';

function App() {


  return (
    <div className="App">
      <ParentComponent/>
    </div>
  );
}

export default App;
