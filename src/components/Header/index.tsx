import Link from "next/link"

export default function Header() {
  // TODO
  return (
    <header>
      <Link href='/'>
        <a>
          <img src='/logo.svg' alt='logo' />
        </a>
      </Link>
    </header>
  )
}
