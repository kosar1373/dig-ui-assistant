import * as React from "react"
import { Button } from "@/components/ui/button"

export function PaymentButton(
  props: React.ComponentProps<typeof Button>
) {
  return (
    <Button
      type="button"
      color="primary"
      size="lg"
      className="min-w-40"
      {...props}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M15.6 6.5H5.4C3.52223 6.5 2 8.01952 2 9.89394V17.1061C2 18.9805 3.52223 20.5 5.4 20.5H15.6C17.4778 20.5 19 18.9805 19 17.1061V9.89394C19 8.01952 17.4778 6.5 15.6 6.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.17773 16.2324H8.57773"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 11.1416H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.1942 17.4484C20.7889 17.168 22.0004 15.7783 22.0004 14.1061V6.89394C22.0004 5.01952 20.4782 3.5 18.6004 3.5H8.40039C6.75712 3.5 5.38613 4.66369 5.06934 6.21056"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      پرداخت
    </Button>
  )
}