import Image from 'next/image'

export const Logo = () => {
    return ( 
        <Image 
        height={100}
        width={150}
        alt='logo'
        src='/logo.svg'/>
     );
}