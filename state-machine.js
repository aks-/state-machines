const STATE_MACHINE = {
  proposed: {
    targets: ['open', 'rejected'],
  },
  open: {
    targets: ['proposed', 'resolved'],
  },
  rejected: {
    targets: [],
  },
  resolved: {
    targets: [],
  },
};

function canGoToSpecificStep(current, target) {
  const step = STATE_MACHINE[current];
  return step.targets && step.targets.includes(target);
}

function getInitialState() {
  return 'proposed';
}

function gotoSpecificStep(current, target) {
  if (!canGoToSpecificStep(current, target)) {
    throw new Error(`Can not go to ${target} from ${current}`);
  }

  return target;
}

function openTicket(current) {
  return gotoSpecificStep(current, 'open');
}

function rejectTicket(current) {
  return gotoSpecificStep(current, 'rejected');
}

function resolveTicket(current) {
  return gotoSpecificStep(current, 'resolved');
}

function clarifyTicket(current) {
  return gotoSpecificStep(current, 'proposed');
}

module.exports = {
  getInitialState,
  openTicket,
  rejectTicket,
  resolveTicket,
  clarifyTicket,
};
