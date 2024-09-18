import React, {useEffect} from 'react'

const SignIn = () => {
    useEffect(()=>{
        document.title ="Sign In"
    })
  return (
    <>
    <main className='sign-in-container'>
        <h2>Sign In</h2>
    </main>
    </>
  )
}

export default SignIn