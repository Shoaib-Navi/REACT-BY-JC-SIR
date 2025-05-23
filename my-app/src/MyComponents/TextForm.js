import React from 'react'

export default function TextForm() {
  return (<>
      <div ClassName="form-floating mb-3">
  <input type="email" ClassName="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div ClassName="form-floating">
  <input type="password" ClassName="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>
   </>
  )
}
