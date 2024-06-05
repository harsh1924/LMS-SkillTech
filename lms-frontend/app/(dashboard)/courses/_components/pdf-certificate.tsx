import React from 'react'
import jsPDF from 'jspdf'
import { Base64 } from 'js-base64';
import img from '@/app/helpers/Blue and Yellow Vector Modern Completion Certificate.png'

const generateCertificate = (name: string, course: string) => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Add background image
  //   var image = new Image();
  //   image.src = img
  //   const imgData = Base64.encode('img.jpeg');
  doc.addImage(img.src, 'PNG', 15, 40, 180, 160);

  // Add recipient name
  doc.setFontSize(36);
  doc.setFont('helvetica'); // Change the font family and style
  doc.text(name, 103, 140, { align: 'center' }); // 105 and 160: horizontal and vertical positions of the text

  // Add course name
  doc.setFontSize(20);
  doc.text(course, 105, 167, { align: 'center' }); // 105 and 195: horizontal and vertical positions of the text

  // Save the PDF
  doc.save(`${name}-${course}.pdf`);
};

function CertificateGenerator(props: { name: string, course: string }) {
  return (
    <div>
      <button className=' border border-yellow-600 px-6 py-2 rounded-md text-yellow-600 text-sm' onClick={() => generateCertificate(props.name, props.course)}>
        Download as PDF
      </button>
    </div>
  );
}

export default CertificateGenerator