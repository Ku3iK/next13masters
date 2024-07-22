import { Controller, type FieldValues } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { type FormTextareaProps } from "@/components/containers/FormTextarea/types";
import { FormMessage, FormItem, FormLabel, FormControl } from "@/components/ui/form";

export const FormTextarea = ({
	name,
	label,
	placeholder,
	textareaProps,
	control,
	...rest
}: FormTextareaProps<FieldValues>) => {
	return (
		<Controller
			name={name}
			control={control}
			{...rest}
			render={({ field, fieldState: { error } }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Textarea {...field} placeholder={placeholder} {...textareaProps} />
					</FormControl>
					{error && <FormMessage>{error.message}</FormMessage>}
				</FormItem>
			)}
		/>
	);
};
