import { useCallback, useState } from 'react'



function App() {

  // All UserState objects Created by this Component 
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPasssword] = useState("");


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_"


    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char);


    }

    setPasssword(pass);



  }, [length, numberAllowed, charAllowed, setPasssword]);


  return (
    <>

      <div className="w-full max-w-md mx-auto shawod-md rounded-lg px-4 py-3 my-10  bg-gray-800 text-orange-500">
        <h1 className="text-2xl text-center text-white my-4">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input type="text" value={password}
            className="outline-none bg-white w-full py-1 px-3"
            placeholder='Password' readOnly />

          <button className="outline-none bg-blue-700 text-white px-3
            py-0.5 shrink-0"> Copy</button>
        </div>


        <div className="flex text-sm gap-x-2">
          {/* start  input range bar */}
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          {/* end input range bar */}

          {/* Number Checkbox start */}
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          {/* Number Checkbox end */}

          {/* Character Checkbox start */}
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
          {/* Character Checkbox end */}
        </div>




      </div>

    </>
  )


}

export default App
