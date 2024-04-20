'use client'
import React from 'react'
import highlightStyle from "./highlight.module.scss"

export default function Highlight({children}) {
  return (
    <span className={highlightStyle.span}>
      {children}
    </span>
  )
}
