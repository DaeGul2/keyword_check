"use client";

import { useState } from "react";

const CHECK_STRING = ['컴퓨터', '사전', '프로그래밍'];

export default function Page() {
  const [text, setText] = useState('')

  const checkString = "(" + CHECK_STRING.join('|') + ")" ;
  const checkStringRegex = new RegExp(checkString, 'g');
  const isCheckStringIncluded = checkStringRegex.test(text);
  const processedText = text.replaceAll(checkStringRegex, (match) => {
      return "[" + match + "]";
  })

  return (
      <div>
          <textarea
              onChange={(e) => {
                  setText(e.target.value);
              }}
              style={{
                  width: '500px',
                  height: '300px'
              }}
          />
          <div
              style={{
                  width: '500px',
                  height: '300px'
              }}>
              {JSON.stringify(isCheckStringIncluded)}
              {processedText}
          </div>
      </div>
  )
}