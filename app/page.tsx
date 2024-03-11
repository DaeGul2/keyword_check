"use client";

import {useMemo, useState} from "react";
import keyword from '@/public/keyword.json'

const CHECK_STRING = keyword;
const DELEMETER = "%구분%"
const CHECK_STRING_REGEX_STR = "(" + CHECK_STRING.join('|') + ")" ;
const CHECK_STRING_REGEX = new RegExp(CHECK_STRING_REGEX_STR, 'g');

const PADDING = '10px';

export default function Page() {
    const [text, setText] = useState('')

    const splitArr = useMemo(() => {
        const processedText = text.replaceAll(CHECK_STRING_REGEX, (match) => {
            return DELEMETER + match + DELEMETER;
        })
        return processedText.split(DELEMETER);
    }, [text])

    return (
        <div style={{
            width: '80vw',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        }}>
            <img src={"/image.png"} alt={"image"} style={{
                width: '80%',
            }}/>
            <textarea
                autoFocus
                onChange={(e) => {
                    setText(e.target.value);
                }}
                style={{
                    width: '80%',
                    height: '300px',
                    resize: 'none',
                    border: '1px solid black',
                    borderRadius: '5px',
                    padding: PADDING
                }}
            />
            <div
                style={{
                    width: '80%',
                    height: '300px',
                    overflow: 'auto',
                    whiteSpace: 'pre-wrap',
                    padding: `0 ${PADDING}`
                }}>
                {
                    splitArr.map((item, index) => {
                        if(item.match(CHECK_STRING_REGEX)){
                            return (<span key={index} style={{
                                backgroundColor: 'yellow'
                            }}>{item}</span>)
                        }
                        return (<span key={index}>{item}</span>)
                    })
                }
            </div>
        </div>
    )
}