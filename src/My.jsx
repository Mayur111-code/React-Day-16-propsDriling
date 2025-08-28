import React, { useContext } from 'react'
import { UserId, UserSkill, UserName } from './ContextData'
const My = () => {
    const userid = useContext(UserId)
    const username = useContext(UserName)
    const userskill = useContext(UserSkill)
  return (
    <div>
        <hr />

<h1>my component</h1>

<h1>Your id is {userid}</h1>
<br />
<h1>your name is {username}</h1>
<br />
<h1>your skills is {userskill}</h1>

    </div>
  )
}

export default My