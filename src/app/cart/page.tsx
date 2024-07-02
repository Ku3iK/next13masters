import { redirect } from "next/navigation";
import Link from "next/link";
import { getCartFromCookies } from "@/api/cart/cart";
import { formatMoney } from "@/utils/formatMoney";
import { ChangeProductQuantity } from "@/ui/molecules/ChangeProductQuantity/ChangeProductQuantity";
import { RemoveButton } from "@/ui/atoms/RemoveButton/RemoveButton";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}

	if (cart.orderItems.length === 0) {
		return (
			<div>
				<h1 className="mb-10">Cart empty</h1>
				<Link
					href={"/products"}
					className="mt-4 rounded-sm border bg-slate-200 px-6 py-2 shadow-sm transition-colors hover:bg-slate-400"
				>
					Back to shop
				</Link>
			</div>
		);
	}

	return (
		<div className="mt-10">
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th className="px-4 text-center">Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map(
						(item) =>
							item.product && (
								<tr key={item.product.id}>
									<td>{item.product.name}</td>
									<td className="text-center">
										<ChangeProductQuantity itemId={item.id} quantity={item.quantity} />
									</td>
									<td>{formatMoney(item.product.price)}</td>
									<td>
										<RemoveButton itemId={item.id} />
									</td>
								</tr>
							),
					)}
				</tbody>
			</table>
		</div>
	);
}
