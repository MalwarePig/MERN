import { createPool } from 'mysql2'
import {Pool} from 'mysql2/promise'

export const pool = createPool({
    host: '192.168.2.8',
    //host:'localhost',
    user: 'Soporte',
    password: 'Soporte1702861',
    //user: 'root',
    //password: '1702861',
    port: 3306,
    database: 'sigg'
})

