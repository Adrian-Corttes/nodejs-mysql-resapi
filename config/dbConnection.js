import {createPool} from 'mysql2/promise';

export const dbConnect  = createPool({
   host:'localhost',
   user:'root',
   password:'',
   port:3306,
   database:'company'
})
