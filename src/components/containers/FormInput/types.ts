import { type ControllerProps, type FieldValues } from "react-hook-form";
import { type InputProps } from "@/components/ui/input";

export type BaseFormInputProps = {
	label: string;
	placeholder?: string;
	inputProps?: InputProps;
};

export type ControllerFieldProps<TFieldValues extends FieldValues> = Omit<
	ControllerProps<TFieldValues>,
	"render"
>;

export type FormInputProps<TFieldValues extends FieldValues> = ControllerFieldProps<TFieldValues> &
	BaseFormInputProps;
