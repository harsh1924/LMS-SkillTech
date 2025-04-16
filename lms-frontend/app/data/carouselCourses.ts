import Banner1 from '@/app/helpers/images/Banner-images/Banner1.jpg'
import Banner2 from '@/app/helpers/images/Banner-images/Banner2.jpg'
import Banner3 from '@/app/helpers/images/Banner-images/Banner3.jpg'
import Banner4 from '@/app/helpers/images/Banner-images/BAnner4.jpg'

interface Course {
    title: string;
    imageUrl: string;
    description: string;
    price: string;
}

export const Courses: Course[] = [
    {
        "title": "Full Stack Developer - MERN Stack",
        "imageUrl": Banner1.src,
        "description": "Gain skill with full stack developer course to design, build, and scale frontend and backend systems. Gain exposure over 10+ tools/frameworks, 6+ real-world projects via an immersive learning approach led by live virtual classes, access to integrated labs and JobAssist services",
        "price": "4999"
    },
    {
        "title": "Java Course and Certification",
        "imageUrl": Banner2.src,
        "description": "This advanced Java Certification Training is designed to guide you through the concepts of Java from introductory techniques to advanced programming skills. This Java course will also provide you with the knowledge of Core Java 8, operators, arrays, loops, methods, and constructors while giving you hands-on experience in JDBC and JUnit framework.",
        "price": "4999"
    },
    {
        "title": "Full Stack Java Developer",
        "imageUrl": Banner3.src,
        "description": "This advanced Java Certification Training is designed to guide you through the concepts of Java from introductory techniques to advanced programming skills. This Java course will also provide you with the knowledge of Core Java 8, operators, arrays, loops, methods, and constructors while giving you hands-on experience in JDBC and JUnit framework.",
        "price": "4999"
    },
    {
        "title": "SQL Certification Course ",
        "imageUrl": Banner4.src,
        "description": "This advanced Java Certification Training is designed to guide you through the concepts of Java from introductory techniques to advanced programming skills. This Java course will also provide you with the knowledge of Core Java 8, operators, arrays, loops, methods, and constructors while giving you hands-on experience in JDBC and JUnit framework.",
        "price": "4999"
    }
]