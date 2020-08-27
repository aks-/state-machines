### Make a simple ticket workflow state machine 4 ways and then understand the nasty edges

Proposed -> open (accept ticket)
open -> Resolved (finish ticket)
Proposed -> Rejected (reject ticket)
open -> Proposed (needs clarification)

### 4 ways

- Do it in pure redux,
- Do a minimal one like done in checkout
- Do one with if statements
- Do one with polymorphic OO
