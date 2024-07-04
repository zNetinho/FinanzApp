// 'use client'
// import { createContext, useContext, useEffect } from 'react'
// type User = {
//   nome: string
//   email: string
//   avatar: string
// }

// // type SignInData = {
// //   email: string
// //   password: string
// // }

// type AuthContextType = {
//   user: User | null
//   // signInAccount: (data: SignInData) => Promise<void>
//   // setUser: SetStateAction<any>,
//   isAuthenticated: boolean
//   handleLogout: () => void
// }

// // @typescript-eslint/no-explicit-any
// export const UserContext = createContext({} as AuthContextType)

// export const UserProvider = ({ children }: any) => {
//   const { user } = useContext(UserContext)
//   // const [user, setUser] = useState(null);
//   const isAuthenticated = !!user

//   useEffect(() => {
//     console.log(user)
//   }, [user])

//   const handleLogout = () => {
//     window.sessionStorage.removeItem('token_jwt')
//     // setUser(null);
//   }

//   return (
//     <UserContext.Provider value={{ user, isAuthenticated, handleLogout }}>
//       {children}
//     </UserContext.Provider>
//   )
// }
// // receber token da função login, e definir usuario buscando no backend as informações
