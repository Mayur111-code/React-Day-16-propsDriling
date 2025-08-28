import React from 'react'


import { createContext } from 'react'
import Consumer from './Consumer'
import My from './My'


 const UserId = createContext()
    const UserSkill = createContext()
    const UserName = createContext()

const ContextData = () => {
  return (
    <div>
<h1>context API - Mechanism - Provider (Create Context) - Consumer (use Context)</h1>
<hr />




<UserId.Provider value={2323}>
    <UserSkill.Provider value="Mern Stack">
        <UserName.Provider value="mayur">
<Consumer/>
<My/>
        </UserName.Provider>
    </UserSkill.Provider>
</UserId.Provider>





    </div>
  )
}

export default ContextData;
export { UserId, UserSkill, UserName }
