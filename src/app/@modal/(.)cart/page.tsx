import { getCartFromCookies } from "@/api/cart/cart";
import { Overlay } from "@/ui/atoms/Overlay/Overlay";

export default async function ModalCart() {
	const cart = await getCartFromCookies();

	return (
		<>
			<Overlay />
			<div className="fixed right-0 top-0 z-40 h-screen w-full max-w-sm bg-white">
				{cart?.orderItems.length === 0 && (
					<div className="flex h-full flex-col items-center justify-center gap-10">
						<p>Cart is empty</p>
					</div>
				)}
				<ul>{cart?.orderItems.map((item) => <li key={item.id}>{item.product?.name}</li>)}</ul>
			</div>
		</>
	);
}
