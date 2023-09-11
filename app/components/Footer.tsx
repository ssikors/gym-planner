import Link from "next/link"

export const Footer = () => {
  return <div className="text-white fixed flex justify-evenly items-center bottom-0 left-0 w-full h-24 bg-slate-800 border-y-4 border-y-teal-200">
    <Link href={'/stats'}>Statistics</Link>
    <Link href={'/my-profile'}>My Profile</Link>
    <Link href={'/workout'}>Workout</Link>
    <Link href={'/workout-templates'}>Templates</Link>
  </div>
}