import React, {useState} from 'react'
import pdfFile from './pdf/document.pdf'

function View() {
    const [defaultPdfFile]=useState(pdfFile)
  return (
    <div className='pdf-container'>
        no pdf file
    </div>
  )
}

export default View