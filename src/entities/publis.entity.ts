import {PrimaryGeneratedColumn,Column,Entity,CreateDateColumn, ManyToOne} from "typeorm"
import {v4 as uuid} from "uuid"
import { User } from "./user.entity";

@Entity("publis")

export class Publis {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    text: string;

    @Column("simple-array")
    img: string[];

    @ManyToOne(() => User, (user) => user.publis)
    user: User

    @CreateDateColumn({name:"created_at"})
    created_at: Date
    
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}