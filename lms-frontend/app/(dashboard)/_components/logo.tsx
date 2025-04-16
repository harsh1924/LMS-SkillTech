import Image from 'next/image'

import LogoImage from '@/app/helpers/images/BlueLogo.png'

export const Logo = () => {
    return ( 
        <Image 
        height={100}
        width={150}
        alt='logo'
        src={LogoImage}/>
     );
}