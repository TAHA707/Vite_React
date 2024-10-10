import { useState } from 'react'
import Navbar from './components/Navbar'
import { Carousel } from 'flowbite-react'
import *  as Yup from 'yup';
import {Formik,Form,Field,ErrorMessage} from 'formik'

function App() {

  return (
    <>
  <Navbar/>
  <div className="h56 sm:h-64 xl:h-80 2xl:h-96 p-5">
        <Carousel>
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shoutmeloud.com/wp-content/uploads/2020/08/What-is-blogging.jpg" alt=""/>
        </Carousel>
      </div>
  <div className='grid grid-cols-2 gap-2 place-items-center py-4'>
    
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

    </div>   


<div className='p-10 bg-gray-200 '>
  <div className='text-2xl font-black text-center'>Contact Us</div>
  <Formik 
  initialValues={{
    name:'',email:'',gender:'',message:''
  }}
  validationSchema={Yup.object({
    name:Yup.string().required(),
    email:Yup.string().email().required(),
    gender:Yup.string().required(),
    message:Yup.string().required(),
  })}
  onSubmit={(values)=>{console.log(values)}}>
<Form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
    <Field type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required></Field>
    <ErrorMessage name='name' className='text-red-500' component={"div"}/>
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <Field type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></Field>
    <ErrorMessage name='email' className='text-red-500' component={"div"}/> 
  </div>
  <div class="mb-5">
    <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your gender</label>
    <Field as="select" name="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      <option>Select Gender</option>
      <option value={"male"}>Male</option>
      <option value={"female"}>Female</option>
    </Field>
    <ErrorMessage name='gender' className='text-red-500' component={"div"}/>  
    </div>
    <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
    <Field as="textarea" name="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></Field> 
    <ErrorMessage name='message' className='text-red-500' component={"div"}/>
    </div>
   
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> 
</Form>
</Formik>

</div>
    </>
    )
  }
  

export default App
