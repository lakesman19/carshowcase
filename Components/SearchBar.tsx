'use client'

import React from 'react'
import { useState } from 'react'
import  SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { SearchButton } from '.'
import { useRouter } from 'next/navigation'
const SearchBar = () => {
  const [manuFacturer, setManuFacturer] = useState('')
    const [model, setModel] = useState('')
   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault()

     if (manuFacturer.trim() === '' && model.trim() === '') {
       return alert('Please provide some input')
     }

     updateSearchParams(model.toLowerCase(), manuFacturer.toLowerCase())
   }
     const router = useRouter()
   const updateSearchParams = (model: string, manuFacturer: string) => {
     // Create a new URLSearchParams object using the current URL search parameters
     const searchParams = new URLSearchParams(window.location.search)

     // Update or delete the 'model' search parameter based on the 'model' value
     if (model) {
       searchParams.set('model', model)
     } else {
       searchParams.delete('model')
     }

     // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
     if (manuFacturer) {
       searchParams.set('manufacturer', manuFacturer)
     } else {
       searchParams.delete('manufacturer')
     }

     // Generate the new pathname with the updated search parameters
     const newPathname = `${
       window.location.pathname
     }?${searchParams.toString()}`

     router.push(newPathname)
   }
  return (
    <div>
      {' '}
      <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
          <SearchManufacturer
            manuFacturer={manuFacturer}
            setManuFacturer={setManuFacturer}
          />
          <SearchButton otherClasses='sm:hidden' />
        </div>
        <div className='searchbar__item'>
          <Image
            src='/model-icon.png'
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
            alt='car model'
          />
          <input
            type='text'
            name='model'
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder='Tiguan...'
            className='searchbar__input'
          />
          <SearchButton otherClasses='sm:hidden' />
        </div>
        <SearchButton otherClasses='max-sm:hidden' />
      </form>
    </div>
  )
}

export default SearchBar
