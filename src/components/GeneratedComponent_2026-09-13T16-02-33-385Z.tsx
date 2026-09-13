import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";

export type PaymentButtonProps = Omit<
  ButtonProps,
  "children" | "color" | "fullWidth" | "size" | "variant"
>;

/**
 * دکمهٔ پرداخت با ظاهر Primary و عرض کامل Container.
 */
export function PaymentButton({
  type = "submit",
  ...props
}: PaymentButtonProps) {
  return (
    <Button
      {...props}
      type={type}
      color="primary"
      fullWidth
      size="lg"
    >
      پرداخت
    </Button>
  );
}