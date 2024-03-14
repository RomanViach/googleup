'use client'
import styles from "../../page.module.css";
import Svg from "@/components/Svg";
import React, {useCallback, useEffect, useRef, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Home() {
    const [valid, setValid] = useState<boolean>(true)
    const [value, setValue] = useState<string>('')
    const router = useRouter()
    const splitter = useRef<HTMLDivElement>(null)
    const line = useRef<HTMLDivElement>(null)
    const input = useRef<HTMLInputElement>(null)
    const checkValid = useCallback(async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
        if(e){
            e.preventDefault()
        }
        if(splitter.current && line.current){
            splitter.current.style.opacity='0.3'
            line.current.style.opacity='0.3'
        }
        setValid(true)
        if(value==='mihoyomustdie@gmail.com' || value === 'mihoyomustdie'){
            await new Promise(resolve => setTimeout(resolve, 600))
            router.push('/v3/signin/challenge/pwd')
        } else {
            await new Promise(resolve => setTimeout(resolve, 400))
            setValid(false)
            if(input.current) {
                input.current.focus()
            }
        }
        if(splitter.current && line.current){
            splitter.current.style.opacity='1'
            line.current.style.opacity='0'
        }
    }, [value]);
    const load = useCallback(async() => {
        if(splitter.current && line.current){
            splitter.current.style.opacity='0.3'
            line.current.style.opacity='0.3'
        }
        setValid(true)
        await new Promise(resolve => setTimeout(resolve, 600))
        if(splitter.current && line.current){
            splitter.current.style.opacity='1'
            line.current.style.opacity='0'
        }
    }, []);
    return (
        <main className={styles.main}>
            <div className={styles.TcuCfd}>
                <div className={styles.line} ref={line}></div>
                <Svg/>
                <div ref={splitter} className={styles.severer}>
                    <div className={styles.leftHalf}>
                        <h1 style={{fontSize: '2rem', fontWeight: 400, marginTop: 24}}><span>Вход</span></h1>
                        <div style={{fontSize: '1rem', fontWeight: 400, marginTop: 16}}>
                            <span>Используйте аккаунт Google</span></div>
                    </div>
                    <div className={styles.rightHalf}>
                        <div className={styles.aboveSubmit}>
                            <div>
                                <form onSubmit={checkValid} className={`${styles.input} ${value ? styles.inputIsntVoid : ''}`}
                                     data-label='Телефон или адрес эл. почты'>
                                    <input autoComplete="username"
                                           className={`${styles.inputField} ${valid? styles.valid: styles.invalid}`}
                                           value={value}
                                           onChange={e => setValue(e.target.value)}
                                    ref={input}
                                    />
                                </form>
                                {!valid &&
                                    <div className={styles.errorMessage}>
                                        <svg aria-hidden="true" className="Qk3oof xTjuxe" fill="currentColor"
                                             focusable="false" width="16px" height="16px" viewBox="0 0 24 24"
                                             xmlns="https://www.w3.org/2000/svg">
                                            <path fill='#b3261e'
                                                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                                        </svg>
                                        Не удалось найти аккаунт Google.
                                    </div>
                                }
                                <div className={styles.aroundLink}>
                                    <Link onClick={load} className={styles.link} href=''>Забыли адрес электронной почты?</Link>
                                </div>
                            </div>
                            <div style={{color: '#444746', fontSize: '0.875rem'}}>
                                Работаете на чужом компьютере? Используйте режим инкогнито.
                                <p><a href='https://support.google.com/accounts?p=signin_privatebrowsing&hl=ru'
                                      target='_blank' className={styles.someCringe}>
                                Подробнее об использовании гостевого режима</a></p>
                            </div>
                        </div>
                        <div className={styles.submit}>
                            <a target='_blank' href='https://accounts.google.com/lifecycle/steps/signup/name?continue=https%3A%2F%2Fwww.google.com.ua%2F&dsh=S-1425236497%3A1710333931932864&ec=GAlAmgQ&flowEntry=SignUp&flowName=GlifWebSignIn&hl=ru&theme=mn&TL=ADg0xR29RYhxuaq1jnazrKfH1Lci6zAJvdlnUPcEiOmMiQbNXzY-WLMfmfa-Lz9P' className={styles.create}>Создать аккаунт</a>
                            <div className={styles.next} onClick={checkValid}>Далее</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
