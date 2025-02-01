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

      <div className="w-full max-w-md mx-auto shawod-md rounded-lg px-4 my-10 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center text-white">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input type="text" value={password} className="outline-none bg-white w-full py-1 px-3"
            placeholder='password' readOnly />
        </div>

      </div>

    </>
  ) 


}

export default App
