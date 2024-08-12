import React from 'react'

export default function page() {
    const handleForm = async (formData)=>{
        // that means every thing in this function will be run in the server 
        "use server"
        console.log('heelo')
        console.log(formData)

    }
  return (
    <div>
        <form action={handleForm}>
            <input name='username' type='text'/>
            <button>Send</button>
        </form>
    </div>
  )
}
