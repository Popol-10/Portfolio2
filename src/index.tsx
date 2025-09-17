// import { useEffect, useState } from 'react'
// import App from './App'
// import { BrowserRouter } from 'react-router-dom'

// export default function Index() {
//   const [dark, setDark] = useState<boolean>(() => {
//     try {
//       return localStorage.getItem('theme') === 'dark'
//     } catch {
//       return false
//     }
//   })

//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
//     try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
//   }, [dark])

//   return (
//     <BrowserRouter>
//       <App dark={dark} setDark={setDark} />
//     </BrowserRouter>
//   )
// }