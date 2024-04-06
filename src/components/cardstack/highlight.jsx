'use client'
import React from 'react'
import highlightStyle from "./highlight.module.css"

export default function Highlight({children}) {
  return (
    <span className={highlightStyle.span}>
      {children}
    </span>
  )
}
