// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";


// export default NextAuth({
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",

//             credentials: {
//                 userName: { label: "Username", type: "text", placeholder: "john doe" },
//                 password: { label: "Password", type: "password" },
//                 action: { label: "Action", type: "text" },
//             },

//             async authorize(credentials, req) {
//                 // Add logic here to look up the user from the credentials supplied

//                 const res = await fetch("http://localhost:3000/api/user", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         userName: credentials?.userName,
//                         password: credentials?.password,
//                         action: credentials?.action,
//                     }),
//                 });
//                 const user = await res.json();

//                 if (user?.data) {
//                     return user;
//                 } else {
//                     return null;
//                 }
//             },
//         }),
//     ],

//     pages: {
//         signIn: "/",
//     },
// });
