import {PrimaryGeneratedColumn,Column,Entity,CreateDateColumn, OneToMany} from "typeorm"
import {v4 as uuid} from "uuid"
import { Publis } from "./publis.entity";
import { Exclude } from "class-transformer";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password:string

    @Column()
    img: string;

    @Column()
    tel: string;

    @Column()
    city: string;

    @Column()
    isAdm: boolean;

    @Column()
    isAthlete: boolean;

    @Column({default:null,nullable:true})
    athlete: string;

    @OneToMany(()=>Publis,(publis) => publis.user)
    publis: Publis[];
    
    @CreateDateColumn({name:"created_at"})
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}