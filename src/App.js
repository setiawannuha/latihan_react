// // import './App.css';
// // // import Button from './components/atom/button';
// // import { useState } from 'react'
// // import TextComponent from './components/atom/TextComponent';

// // function App() {
// //   const [count, setCount] = useState(0)
// //   // const [users, setUsers] = useState({}) // from api -> state
// //   const [form, setForm] = useState({
// //     email: "",
// //     password: "",
// //     name: {
// //       firstName: "",
// //       lastName: ""
// //     }
// //   })
// //   // {}

// //   const [navbarActive, setNavbarActive] = useState(false)
// //   const [textIsActive, setTextIsActive] = useState(false)

// //   return (
// //     <div className="App">
// //       <button type="button" onClick={() => setTextIsActive(!textIsActive)}>Text Show</button>
// //       <TextComponent text="Fazztrack" isActive={textIsActive} />
// //       <br />
// //       <br />
// //       <br />
// //       {/* <img src="https://www.fazztrack.com/_nuxt/img/fazztrack-logo-color.cba88b7.svg" onClick={() => setNavbarActive(!navbarActive)} alt="" /> */}
// //       <button type="button" onClick={() => setNavbarActive(!navbarActive)}>Show / Hide Navbar</button>
// //       {
// //         navbarActive?(
// //           <div>Navbar</div>
// //         ):null
// //       }

// //       {/* <Button title="Login" subtitle="button login" data={[1,2,3]} /> */}
// //       {/* <Button title="Tamb" subtitle="button register" /> */}
// //       {/* {count}
// //       <br /> */}
// //       <button type="button" onClick={() => setCount(count+1)}>Tambah</button>
// //       <br />
// //       <input type="" onChange={(e) => setForm({ ...form, emails: "123" })} name="" value="" />
// //       {/* 
      
// //           setForm({
// //               email: "",
// //               password: "",
// //               name: {
// //                 firstName: "",
// //                 lastName: ""
// //               },
// //               emails: "123"
// //           })
// //       */}
// //     </div>
// //   );
// // }

// // export default App;

// // didmount, didupdate

// import { useState, useEffect } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)
//   const [word, setWord] = useState("")

//   // didmount
//   useEffect(() => {
//     setCount(10)
//   }, [])

//   const tampilKetikaDidUpdate = () => {
//     console.log("did update")
//   }
//   // didUpdate
//   // didupdate ketika ada perubahan (semua perubahan) not recomended
//   // useEffect(() => {
//   //   tampilKetikaDidUpdate()
//   // })

//   // didupdate ketika ada perubahan (spesifik perubahan)
//   useEffect(() => {
//     tampilKetikaDidUpdate()
//   }, [word])



//   const data = [
//     {
//       name: "abc"
//     },
//     {
//       name: "def"
//     },
//     {
//       name: "ghi"
//     }
//   ]
//   const [search, setSearch] = useState("") // abc
//   const [products, setProducts] = useState([]) // [{name: "abc"}]
//   // ketika search berubah
//   useEffect(() => {
//     // kode dijalankan ketika search berubah
//     const result = data.filter((e) => e.name === search)
//     setProducts(result)
//   }, [search])


//   // lodash debounce 3s
//   // .map .filter .forEach
//   return(
//     <div>
//     {count}
//     <br />
//     <button type="button" onClick={() => setCount(count+1)}>Tambah</button>
//     <br />
//     {word}
//     <br />
//     <button type="button" onClick={() => setWord(word+"a")}>Tambah</button>
//     <br/>
//     <input type="" name="" value={search} onChange={(e) => setSearch(e.target.value)} />
//     <div style={{border: "1px solid #333", minHeight: '200px'}}>
//       {JSON.stringify(products)}
//     </div>
//     </div>
//   )
// }

// export default App
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_ALL_USERS, INSERT_USER } from "./store/actions/user"
const App = () => {
  const dispatch = useDispatch()
  const user = useSelector( store => store.user )

  // const getData = () => {
  //   dispatch(GET_ALL_USERS())
  // }
  const insertData = () => {
    INSERT_USER({name: "test"}).then((response) =>{
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    dispatch(GET_ALL_USERS())
  }, [])
  return(
    <div>
      Hello
      <br/>
      <button type="button" onClick={() => insertData()}>Insert Data</button>
      <br/>
      <ul>
        {
          user.listIsLoading?(
            <div>
              Loading...
            </div>
          ):(
            user.listIsError?(
              <div>{user.listErrorMessage}</div>
            ):(
              user.listData.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))
            )
          )
        }
      </ul>
    </div>
  )
}

export default App