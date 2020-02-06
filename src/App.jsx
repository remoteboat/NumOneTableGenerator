import { hot } from 'react-hot-loader';
import React from 'react';
import { connect } from 'react-redux';
import {
  showConfigure,
  closeConfigure,
  updateConfigureForm,
  commitConfigureChange,
} from './state/actions';
import './App.css';
import SnakeTable from './SnakeTable';
import ConfigurePanel from './ConfigurePanel';

const message = 'No. 1 Tables Generator';
const App = (props) => {
  const { state } = props;
  const { red, green, blue } = state;
  const { configure, configureFormState } = state;
  const { showConfigure, closeConfigure, updateConfigureForm, commitConfigureChange } = props;

  return (
    <section className="">
      <div className="">
        <h1 className="title">{message}</h1>
        <div className="snake-tables">
          <SnakeTable color="red" showConfigure={showConfigure} {...red} />
          <SnakeTable color="green" showConfigure={showConfigure} {...green} />
          <SnakeTable color="blue" showConfigure={showConfigure} {...blue} />
        </div>
      </div>
      {configure && (
        <ConfigurePanel
          closeConfigure={closeConfigure}
          configureColor={configure}
          configureFormState={configureFormState}
          updateConfigureForm={updateConfigureForm}
          commitConfigureChange={commitConfigureChange}
        />
      )}
    </section>
  )
}

const mapStateToProps = state => {
  return {state}
}

const mapDispatchToProps = dispatch => ({
  showConfigure: color => dispatch(showConfigure(color)),
  closeConfigure: () => dispatch(closeConfigure()),
  updateConfigureForm: formState => dispatch(updateConfigureForm(formState)),
  commitConfigureChange: () => dispatch(commitConfigureChange()),
})

//export default hot(module)(App);
export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));