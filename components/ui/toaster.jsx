"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "@/components/ui/toast";
function Toaster() {
  const { toasts } = useToast();
  return  jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return  jsxs(Toast, { ...props, children: [
         jsxs("div", { className: "grid gap-1", children: [
          title &&  jsx(ToastTitle, { children: title }),
          description &&  jsx(ToastDescription, { children: description })
        ] }),
        action,
         jsx(ToastClose, {})
      ] }, id);
    }),
     jsx(ToastViewport, {})
  ] });
}
export {
  Toaster
};
