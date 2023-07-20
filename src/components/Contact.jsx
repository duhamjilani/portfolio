import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#444b52] flex justify-center items-center p-4'>
      <form action="" className='flex flex-col w-full max-w-[600px]'>
        <div className='pb-8'>
<p className='text-4xl py-4 border-b-2 border-blue-500 inline text-white'> Contact-me</p>

        </div>
<input name='name' type='text' placeholder='Name' className='p-2'/>

<input name='email' type='email' placeholder='Email' className='p-2 my-4'/>
<textarea name='message'  rows={10} placeholder='Message' className='p-2'></textarea>
<button className='px-6 text-white border-2 hover:bg-blue-500 hover:border-blue-500 px-4 py-3 my-8 mx-auto flex items-center'> Submit</button>


      </form>







    </div>
  )
}

export default Contact
