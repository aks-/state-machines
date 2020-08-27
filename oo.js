const machine = {
  proposed: ['open', 'rejected'],
  open: ['proposed', 'resolved'],
  rejected: [],
  resolved: [],
};

class Machine {
  constructor() {
    this.step = 'proposed';
  }

  _goTo(nextStep) {
    if (!machine[this.step].includes(nextStep)) {
      throw new Error(`cant go from ${this.step} to ${nextStep}`);
    }

    this.step = nextStep;
  }

  openTicket() {
    _goTo('open');
  }
  resolveTicket() {
    _goTo('resolved');
  }
  rejectTicket() {
    _goTo('rejected');
  }
  clarifyTicket() {
    _goTo('proposed');
  }
}

module.exports = Machine;
