import React from 'react'

export const FileComponent = ({file}) => {
  console.log(file);
  if (file && file.type === 'application/pdf') {
    // Aquí puedes asignar una URL de imagen diferente para PDF
    const pdfImageUrl = 'https://example.com/pdf-image.png';
   
  }
  return (
   
    <div></div>
  )
}
