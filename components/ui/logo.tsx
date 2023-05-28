import Image from 'next/image'
import Link from 'next/link'
import MyLogo from '@/public/images/interviewly.svg'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={MyLogo} alt="" className='w-8 h-8' />
    </Link>
  )
}
