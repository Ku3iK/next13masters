import { type ControllerProps, type FieldValues } from "react-hook-form";
import { type TextareaProps } from "@/components/ui/textarea";

export type BaseFormTextareaProps = {
	label: string;
	placeholder?: string;
	textareaProps?: TextareaProps;
};

export type ControllerFieldProps<TFieldValues extends FieldValues> = Omit<
	ControllerProps<TFieldValues>,
	"render"
>;

export type FormTextareaProps<TFieldValues extends FieldValues> =
	ControllerFieldProps<TFieldValues> & BaseFormTextareaProps;
