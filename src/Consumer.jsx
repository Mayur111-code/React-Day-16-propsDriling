import React from 'react'

import { useContext } from 'react'

import {UserId, UserSkill, UserName} from './ContextData'

const Consumer = () => {
    const userid = useContext(UserId)
    const userskill = useContext(UserSkill)
    const username = useContext(UserName)
  return (
    <div>

<h1>Your id is {userid}</h1>
<br />
<h1>your name is {username}</h1>
<br />
<h1>your skills is {userskill}</h1>

        
    </div>
  )
}

export default Consumer;