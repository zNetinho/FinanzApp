import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  className?: string
  href: string
  anchor?: string
  /**
   * default = ""
   */
  rel?: string
  /**
   * default = "_self"
   */
  target?: string
  children?: React.ReactNode
}

function LinkComponent({ children, className, href, rel, target }: Props) {
  if (children) {
    return (
      <Link href={href} target={target} rel={rel} className={cn('', className)}>
        {children}
      </Link>
    )
  }
}

export default LinkComponent
