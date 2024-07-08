const{gql}=require('appolo-server-express')
const typedefs=gql`
type User{
_id:ID! 
name:String! 
email:String! p
assword:String!}
type Query{
getUser(id:ID!):User
getUsers:[User]
searchUsers(name:String!):[User]}`;
module.exports=typedefs;