const {createStore} = require('redux');

function reducer(state = {step: 'proposed'}, action) {
  const {step} = state;
  const error = `cant go from ${step} to ${action.type}`;

  switch (action.type) {
    case 'proposed':
    case 'rejected':
      if (step !== 'open') return {step, error};

    case 'open':
    case 'resolved':
      if (step !== 'proposed') return {step, error};

    default:
      return {
        step: action.type,
      };
  }
}

module.exports = createStore(reducer);
