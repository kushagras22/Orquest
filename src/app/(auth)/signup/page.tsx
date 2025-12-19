import RegisterForm from "@/features/auth/components/register-form"
import { requireUnAuth } from "@/lib/auth-utils"
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
    await requireUnAuth();

    return (
        <RegisterForm />
    )
}

export default Page