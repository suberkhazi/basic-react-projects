import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [splchar, setSplchar] = useState(false)
  const [password, setPassword] = useState("")

const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numbers) str+= "0123456789"
  if(splchar) str+= "!@#$%^&*()_+"

  for(let i=1; i<=length; i++){
    let char = Math.floor(Math.random() * str.length + 1)

    pass += str.charAt(char)
  }

  setPassword(pass)

}, [length, numbers, splchar, setPassword])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numbers,splchar, passwordGenerator])

  // using useRef hook
  const passref = useRef(null);

  const copypasstoclipboard = useCallback(() => {
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='outline-none w-full py-2 px-3 mb-2' 
          placeholder="password"
          readOnly
          ref={passref}
          />
          <button className='bg-blue-600 text-white outline-none mb-2 px-2 py-2' onClick={copypasstoclipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 pb-4'>
        <div className='flex item-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {
            setLength(e.target.value)
          }}  />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numbers}
          id='numberInput'
          onChange={()=>{
            setNumbers((prev) => !prev);
          }}
          />
          <label htmlFor="NumbersAllowed">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={splchar}
          id='charInput'
          onChange={()=>{
            setSplchar((prev) => !prev);
          }}
          />
          <label htmlFor="charsAllowed">Special Chars</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
