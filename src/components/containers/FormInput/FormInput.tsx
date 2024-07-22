import { Controller, type FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { type FormInputProps } from "@/components/containers/FormInput/types";
import { FormMessage, FormItem, FormLabel, FormControl } from "@/components/ui/form";

export const FormInput = ({
	name,
	label,
	placeholder,
	inputProps,
	control,
	...rest
}: FormInputProps<FieldValues>) => {
	return (
		<Controller
			name={name}
			control={control}
			{...rest}
			render={({ field, fieldState: { error } }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input {...field} placeholder={placeholder} {...inputProps} />
					</FormControl>
					{error && <FormMessage>{error.message}</FormMessage>}
				</FormItem>
			)}
		/>
	);
};
