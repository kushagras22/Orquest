import Image from "next/image"
import Link from "next/link"

const AuthLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="flex flex-col gap-6 items-center justify-center min-h-svh p-6 md:p-10 bg-muted mx-auto ">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link href="/" className="flex items-center gap-2 self-center font-medium">
                    <Image src="/logos/logo.svg" alt="Orquest" width={30} height={30}/>
                    Orquest
                </Link>
                </div>
        </div>
    )
}

export default AuthLayout