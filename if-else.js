const machine = {
  proposed: ['open', 'rejected'],
  open: ['proposed', 'resolved'],
  rejected: [],
  resolved: [],
};

function machine() {
  let step = 'proposed';

  function _goTo(nextStep) {
    if (step === 'proposed' && ['open', 'rejected'].includes(nextStep))
      step = nextStep;
    if (step === 'open' && ['proposed', 'resolved'].includes(nextStep))
      step = nextStep;

    throw new Error(`cant go ffom ${step} to ${nextStep}`);
  }

  function getCurrentStep() {
    return step;
  }

  function openTicket() {
    return _goTo('open');
  }
  function resolveTicket() {
    return _goTo('resolved');
  }
  function rejectTicket() {
    return _goTo('rejected');
  }
  function clarifyTicket() {
    return _goTo('proposed');
  }

  return {
    getCurrentStep,
    openTicket,
    rejectTicket,
    resolveTicket,
    clarifyTicket,
  };
}
